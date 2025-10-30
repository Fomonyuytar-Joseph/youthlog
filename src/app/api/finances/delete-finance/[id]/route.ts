import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const financeId = params.id;
  const deletedFinance = await prisma.finance.delete({
    where: { id: financeId },
  });
  return NextResponse.json(deletedFinance);
}
