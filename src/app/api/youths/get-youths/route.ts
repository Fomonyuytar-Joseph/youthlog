import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function GET() {
  const youths = await prisma.member.findMany();
  return NextResponse.json(youths);
}



