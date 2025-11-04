import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function GET() {
  const attendances = await prisma.attendance.findMany({
    where: {
      type: "YOUTH_MEETING",
    },
  });
  return NextResponse.json(attendances);
}
