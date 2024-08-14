import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { auth } from "@/middlewares/auth";


export async function CreateRating(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(auth).post(
    '/rating', {
      schema: {
        summary: 'Create a new rating',
        security: [{ bearerAuth: [] }],
        tags: ['auth'],
        body: z.object({
          rating: z.number().max(10),
          movieId:z.string().cuid2()
        }),
        // response: {
        //   201: z.object({
        //     token: z.string(),
        //   }),
        // },
      },
  },
    async (req, res) => {
      const useId = await req.useId()
      const { rating } = req.body


      // return res.status(201).send({ token })
    }
  )
}
