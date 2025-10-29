import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id: userId } = context.params;
  if (!userId)
    return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const deletedMember = await prisma.member.delete({
    where: { id: userId },
  });
  return NextResponse.json(deletedMember);
}
