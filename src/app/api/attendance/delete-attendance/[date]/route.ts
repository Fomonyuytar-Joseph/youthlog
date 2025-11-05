import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { date: string } }
) {
  const attendanceDate = params.date;
  const deletedAttendance = await prisma.attendance.deleteMany({
    where: { date: new Date(attendanceDate) },
  });
  return NextResponse.json(deletedAttendance);
}
