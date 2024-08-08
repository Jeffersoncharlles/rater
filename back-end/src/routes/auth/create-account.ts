import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "../../lib/prisma";
import { hash } from "bcryptjs";


export async function createAccount(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/account', {
      schema: {
        summary: 'Create a new Account',
        tags: ['auth'],
        body: z.object({
          name: z.string(),
          email: z.string(),
          password:z.string().min(8)
        }),
      },
  },
    async (req, res) => {
      const { email, name, password } = req.body

      const userWithSameEmail = await prisma.account.findUnique({
        where: {
          email
        }
      })

      if (userWithSameEmail) {
        throw new Error('user with same e-mail already exists.')
      }

      const passwordHash = await hash(password, 6)

      await prisma.account.create({
        data: {
          fullName: name,
          email,
          passwordHash
        }
      })


      return res.status(201).send()
    }
  )
}
