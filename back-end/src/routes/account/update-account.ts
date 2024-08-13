import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
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
          email: z.string().email(),
          username: z.string({}).min(4,{
          message: 'Digite seu nome de usuário',
          }).max(16,{message:'Pode Conter no máximo 16 caracteres'}).nullable(),
        }),
         response: {
          204: z.null()
        },
      },
  },
    async (req, res) => {
      const userId = await req.useId()

      const { fullName, username } = req.body

      const accountWithId = await prisma.account.findUnique({
        where: {
          id:userId
        }
      })

      if (!accountWithId) {
        throw new UnauthorizedError('Invalid Credentials.')
      }

     const account =  await prisma.account.update({
        where: {
          email:accountWithId.email
        },
        data: {
          fullName,
          userName:username
        }
      })

      return res.status(204).send()
    }
  )
}
