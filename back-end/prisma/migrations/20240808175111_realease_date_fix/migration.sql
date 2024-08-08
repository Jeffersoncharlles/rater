-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "backdrop_path" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "rating_id" TEXT NOT NULL,
    CONSTRAINT "movies_rating_id_fkey" FOREIGN KEY ("rating_id") REFERENCES "rating" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_movies" ("backdrop_path", "id", "overview", "poster_path", "rating_id", "release_date", "title") SELECT "backdrop_path", "id", "overview", "poster_path", "rating_id", "release_date", "title" FROM "movies";
DROP TABLE "movies";
ALTER TABLE "new_movies" RENAME TO "movies";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
