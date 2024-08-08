import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { BadRequestError } from "@/routes/errors/bad-request-error";


export async function createAccount(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/account', {
      schema: {
        summary: 'Create a new Account',
        tags: ['account'],
        body: z.object({
          name: z.string(),
          email: z.string(),
          password:z.string().min(8)
        }),
        response: {
          201:z.null()
        }
      },
  },
    async (req, res) => {
      const { email, name, password } = req.body

      const accountWithSameEmail = await prisma.account.findUnique({
        where: {
          email
        }
      })

      if (accountWithSameEmail) {
        throw new BadRequestError('account with same e-mail already exists.')
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
