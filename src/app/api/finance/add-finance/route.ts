import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { type, amount, date } = await request.json();
  const newFinance = await prisma.finance.create({
    data: {
      type,
      amount,
      date,
    },
  });
  return NextResponse.json(newFinance);
}
