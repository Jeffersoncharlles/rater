import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/middlewares/auth";
import { UnauthorizedError } from "@/routes/errors/unauthorized-error";



export async function readAccount(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(auth).get(
    '/account', {
      schema: {
        summary: 'Read Account',
        security: [{ bearerAuth: [] }],
        tags: ['account'],
        response: {
          200: z.object({
            profile: z.object({
              id: z.string().uuid(),
              fullName: z.string(),
              email:z.string().email(),
              userName:z.string().nullable()
            }),
          }),
        },
      },
  },
    async (req, res) => {
    const userId = await req.useId()


     const accountFromID = await prisma.account.findUnique({
        where: {
          id:userId
       },
       select: {
         id: true,
         email: true,
         fullName: true,
         userName:true
       }
     })

      if (!accountFromID) {
         throw new UnauthorizedError('Invalid credencial.')
      }


      return res.status(200).send({ profile:accountFromID })
    }
  )
}
