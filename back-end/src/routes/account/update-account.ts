import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { UnauthorizedError } from "@/routes/errors/unauthorized-error";
import { auth } from "@/middlewares/auth";


export async function updateAccount(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().register(auth).put(
    '/account', {
      schema: {
        summary: 'Update a Account',
        security: [{ bearerAuth: [] }],
        tags: ['account'],
        body: z.object({
          fullName: z.string(),
          password:z.string().min(8)
        }),
         response: {
          204: z.null()
        },
      },
  },
    async (req, res) => {
      const userId = await req.useId()

      const { fullName, password } = req.body

      const accountWithId = await prisma.account.findUnique({
        where: {
          id:userId
        }
      })

      if (!accountWithId) {
        throw new UnauthorizedError('Invalid Credentials.')
      }

      const passwordHash = await hash(password, 6)

      await prisma.account.update({
        where: {
          email:accountWithId.email
        },
        data: {
          fullName,
          passwordHash
        }
      })


      return res.status(204).send()
    }
  )
}
