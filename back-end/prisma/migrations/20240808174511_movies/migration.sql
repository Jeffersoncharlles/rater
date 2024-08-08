-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "backdrop_path" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL,
    "rating_id" TEXT NOT NULL,
    CONSTRAINT "movies_rating_id_fkey" FOREIGN KEY ("rating_id") REFERENCES "rating" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
