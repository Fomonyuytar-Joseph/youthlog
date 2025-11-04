import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { attendances } = body;

    if (!Array.isArray(attendances) || attendances.length === 0) {
      return NextResponse.json(
        { error: "No attendance data provided" },
        { status: 400 }
      );
    }

    // Validate required fields
    for (const record of attendances) {
      if (!record.memberId || !record.date || !record.type) {
        return NextResponse.json(
          { error: "Each record must have memberId, date, and type" },
          { status: 400 }
        );
      }
    }

    const created = await prisma.attendance.createMany({
      data: attendances.map((a) => ({
        memberId: a.youthId,
        date: new Date(a.date),
        type: a.type,
        present: a.present ?? false,
        recordedBy: a.recordedBy ?? null,
      })),
    });

    return NextResponse.json({
      message: "Attendance recorded successfully",
      count: created.count,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to record attendance" },
      { status: 500 }
    );
  }
}
