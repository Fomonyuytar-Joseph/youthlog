import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const finances = await prisma.finance.findMany();
  const totalIncome = await prisma.finance.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      type: "INCOME",
    },
  });

  const totalExpense = await prisma.finance.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      type: "EXPENSE",
    },
  });

  return NextResponse.json({
    finances,
    totalIncome: totalIncome._sum.amount || 0,
    totalExpense: totalExpense._sum.amount || 0,
  });
}
