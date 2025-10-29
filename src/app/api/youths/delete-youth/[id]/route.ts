import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id; // string from the URL segment
  if (!userId)
    return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const deletedMember = await prisma.member.delete({
    where: { id: userId },
  });
  return NextResponse.json(deletedMember);
}
