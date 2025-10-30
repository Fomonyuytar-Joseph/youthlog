import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

// ✅ Instantiate Prisma Client
const prisma = new PrismaClient();

interface LoginCredentials {
  email?: string;
  password?: string;
}

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as LoginCredentials;
  console.log(email, password ,'email and password');

  // Find the user in DB
  const user = await prisma.adminUser.findUnique({ where: { email } });
  // console.log(user,'user');
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Compare passwords
  const isMatch: boolean = await bcrypt.compare(password as string, user.password as string);
  if (!isMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Set a simple session cookie (using Next.js cookies API)
  const res = NextResponse.json({ success: true });
  res.cookies.set("auth", user.id, { httpOnly: true, path: "/" });
  return res;
}
