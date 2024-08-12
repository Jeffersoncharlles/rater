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
          name: z.string().refine((value) => value.split(' ').length > 1, {
            message: 'Por favor digite seu nome completo',
          }),
          email: z.string(),
          password:z.string().min(8,{message:'Mínimo 8 caracteres'})
        }),
        response: {
          201:z.object({
            token: z.string(),
          }),
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

      const account  =  await prisma.account.create({
        data: {
          fullName: name,
          email,
          passwordHash
        }
      })

      //apos criar ja logar no sistema
      const token = await res.jwtSign(
        {
          sub: account.id,
        },
        {
          sign: {
            expiresIn: '7d',
          },
        },
      )

      return res.status(201).send({token})
    }
  )
}
