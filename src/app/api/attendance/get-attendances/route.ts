import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Get all attendance records
    const records = await prisma.attendance.findMany({
      select: {
        date: true,
        present: true,
      },
      where: {
        type: "YOUTH_MEETING",
      },
    });

    // Group by date manually
    const grouped: Record<string, { present: number; absent: number }> = {};

    for (const record of records) {
      const dateKey = record.date.toISOString().split("T")[0]; // YYYY-MM-DD

      if (!grouped[dateKey]) {
        grouped[dateKey] = { present: 0, absent: 0 };
      }

      if (record.present) grouped[dateKey].present += 1;
      else grouped[dateKey].absent += 1;
    }

    // Convert object to array for frontend
    const summaryArray = Object.entries(grouped).map(([date, stats]) => ({
      date,
      present: stats.present,
      absent: stats.absent,
    }));

    // Calculate highest & lowest attendance
    const highest = Math.max(...summaryArray.map((s) => s.present));
    const lowest = Math.min(...summaryArray.map((s) => s.present));

    return NextResponse.json({
      summary: summaryArray,
      highestAttendance: highest || 0,
      lowestAttendance: lowest || 0,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch summary" },
      { status: 500 }
    );
  }
}
