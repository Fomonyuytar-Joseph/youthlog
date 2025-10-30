import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { type, amount, date, title } = await request.json();
  console.log({ type, amount, date, title }, "add finance route data");
  const newFinance = await prisma.finance.create({
    data: {
      type,
      amount,
      date,
      title,
    },
  });
  return NextResponse.json(newFinance);
}
