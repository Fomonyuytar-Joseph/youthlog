import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const attendanceId = params.id;
  const deletedAttendance = await prisma.attendance.delete({
    where: { id: attendanceId },
  });
  return NextResponse.json(deletedAttendance);
}
