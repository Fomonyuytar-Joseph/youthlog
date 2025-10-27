
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { name, gender, phone, isActive, role, occupation , address } =
    await request.json();
  const newMember = await prisma.member.create({
    data: {
      name,
      gender,
      phone,
      isActive,
      role,
      occupation,
      address
    },
  });
  return NextResponse.json(newMember);
}