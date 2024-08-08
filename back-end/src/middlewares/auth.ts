import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'


import { UnauthorizedError } from '@/routes/errors/unauthorized-error'

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (req) => {
    req.useId = async () => {
      try {
        const { sub } = await req.jwtVerify<{ sub: string }>()

        console.log(sub)

        return sub
      } catch (error) {
        throw new UnauthorizedError('Invalid auth token')
      }
    }
  })
})
