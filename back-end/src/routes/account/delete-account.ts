import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/middlewares/auth";
import { UnauthorizedError } from "@/routes/errors/unauthorized-error";


export async function deleteAccount(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(auth).delete(
    '/account', {
      schema: {
        summary: 'Delete a Account',
        security: [{ bearerAuth: [] }],
        tags: ['account'],
         response: {
          200: z.null(),
        }
      },
  },
    async (req, res) => {
    const userId = await req.useId()


     const accountFromID = await prisma.account.findUnique({
        where: {
          id:userId
       }
     })

      if (!accountFromID) {
         throw new UnauthorizedError('Invalid credencial.')
      }

      await prisma.account.delete({
        where: {
          email:accountFromID.email
        }
      })


      return res.status(200).send()
    }
  )
}
