import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { BadRequestError } from "@/routes/errors/bad-request-error";
import { UnauthorizedError } from "../errors/unauthorized-error";


export async function session(app:FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/session', {
      schema: {
        summary: 'Session',
        tags: ['auth'],
        body: z.object({
          email: z.string(),
          password:z.string().min(8)
        }),
        response: {
          201: z.object({
            token: z.string(),
          }),
        },
      },
  },
    async (req, res) => {
      const { email, password } = req.body

     const accountFromEmail = await prisma.account.findUnique({
        where: {
          email,
        },
     })

      if (!accountFromEmail) {

        throw new UnauthorizedError('Invalid credentials')
      }

      const isPasswordValid = await compare(
        password,
        accountFromEmail.passwordHash,
      )
      if (!isPasswordValid) {
        throw new UnauthorizedError('Invalid credentials')
      }

      const token = await res.jwtSign(
        {
          sub: accountFromEmail.id,
        },
        {
          sign: {
            expiresIn: '7d',
          },
        },
      )

      return res.status(201).send({ token })
    }
  )
}
