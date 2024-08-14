import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { prisma } from "@/lib/prisma"

export async function featAllMovies(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/movies', {
      schema: {
        summary: 'Get All Movies',
        tags: ['movies'],
        // response: {
        //   200: z.object({
        //     movies: z.array(
        //       z.object({
        //         id: z.string().cuid2(),
        //         backdropPath: z.string(),
        //         posterPath: z.string(),
        //         title: z.string(),
        //         overview: z.string(),
        //         releaseDate:z.coerce.date()
        //       })
        //     ),
        //   }),
        // },
      },
  },
    async (req, res) => {
      const movies = await prisma.movies.findMany()

      return res.status(200).send({movies})
    }
  )
}
