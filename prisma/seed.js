/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);
  await prisma.adminUser.create({
    data: {
      email: "admin@youthgroup.com",
      password: hashedPassword,
    },
  });

  await prisma.member.createMany({
    data: [
      { name: "John Doe" },
      { name: "Jane Smith" },
      { name: "Paulina Ngassa" },
    ],
  });

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
