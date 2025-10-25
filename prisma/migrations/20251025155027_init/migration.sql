-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "gender" TEXT DEFAULT 'MALE',
    "age" INTEGER,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "role" TEXT DEFAULT 'MEMBER',
    "occupation" TEXT DEFAULT 'STUDENT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Member" ("age", "createdAt", "gender", "id", "isActive", "name", "occupation", "phone", "role", "updatedAt") SELECT "age", "createdAt", "gender", "id", "isActive", "name", "occupation", "phone", "role", "updatedAt" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
