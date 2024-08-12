/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "account" ADD COLUMN "username" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "account_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "rating_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "rating_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_rating" ("account_id", "createdAt", "id", "movie_id", "rating", "updatedAt") SELECT "account_id", "createdAt", "id", "movie_id", "rating", "updatedAt" FROM "rating";
DROP TABLE "rating";
ALTER TABLE "new_rating" RENAME TO "rating";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "account_username_key" ON "account"("username");
