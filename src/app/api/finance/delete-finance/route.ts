import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const deletedFinance = await prisma.finance.delete({
    where: { id },
  });
  return NextResponse.json(deletedFinance);
}