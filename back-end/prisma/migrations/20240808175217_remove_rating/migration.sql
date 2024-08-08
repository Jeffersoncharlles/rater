/*
  Warnings:

  - You are about to drop the column `rating_id` on the `movies` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "backdrop_path" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "release_date" TEXT NOT NULL
);
INSERT INTO "new_movies" ("backdrop_path", "id", "overview", "poster_path", "release_date", "title") SELECT "backdrop_path", "id", "overview", "poster_path", "release_date", "title" FROM "movies";
DROP TABLE "movies";
ALTER TABLE "new_movies" RENAME TO "movies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
