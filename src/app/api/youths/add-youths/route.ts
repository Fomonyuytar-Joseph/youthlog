
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { name, gender, age, phone, isActive, role, occupation } =
    await request.json();
  const newMember = await prisma.member.create({
    data: {
      name,
      gender,
      age,
      phone,
      isActive,
      role,
      occupation,
    },
  });
  return NextResponse.json(newMember);
}