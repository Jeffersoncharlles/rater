import { PrismaClient} from '@prisma/client'

import movies  from './movies.json'

const prisma = new PrismaClient()

const seed = async () => {

  await prisma.movies.deleteMany()
  await prisma.account.deleteMany()
  await prisma.rating.deleteMany()

  for (const movie of movies.results) {
    await prisma.movies.create({
      data: {
        backdropPath: movie.backdrop_path,
        overview: movie.overview,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        title: movie.title,
      }
    })
  }
}

seed();
