import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  try {
    const year = searchParams.get("year");
    const month = searchParams.get("month");
    console.log("Filter Params:", { year, month });

    // Build a date filter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let dateFilter: any = {};

    if (year && month && month !== "All Months") {
      // Get the numeric month index (0–11)
      const monthIndex = new Date(`${month} 1, ${year}`).getMonth();

      // Create start and end of month boundaries
      const startDate = new Date(Number(year), monthIndex, 1);
      const endDate = new Date(Number(year), monthIndex + 1, 0, 23, 59, 59);

      dateFilter = {
        date: {
          gte: startDate,
          lte: endDate,
        },
      };
    } else if (year && month === "All Months") {
      // Filter the entire year
      const startDate = new Date(Number(year), 0, 1);
      const endDate = new Date(Number(year), 11, 31, 23, 59, 59);

      dateFilter = {
        date: {
          gte: startDate,
          lte: endDate,
        },
      };
    }

    // Fetch all finance records with the filter
    const finances = await prisma.finance.findMany({
      where: dateFilter,
      orderBy: { date: "desc" },
    });

    // Aggregate income & expenses with same filter
    const totalIncome = await prisma.finance.aggregate({
      _sum: { amount: true },
      where: {
        ...dateFilter,
        type: "INCOME",
      },
    });

    const totalExpense = await prisma.finance.aggregate({
      _sum: { amount: true },
      where: {
        ...dateFilter,
        type: "EXPENSE",
      },
    });

    return NextResponse.json({
      finances,
      totalIncome: totalIncome._sum.amount || 0,
      totalExpense: totalExpense._sum.amount || 0,
    });
  } catch (error) {
    console.error("Error fetching finances:", error);
    return NextResponse.json(
      { error: "Failed to fetch finances" },
      { status: 500 }
    );
  }
}
