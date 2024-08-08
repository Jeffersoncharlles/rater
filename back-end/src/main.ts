import fastify from "fastify";
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
  jsonSchemaTransform
} from 'fastify-type-provider-zod'
import { routes } from "./routes";
import fastifyCors from "@fastify/cors";
import { env } from "./env";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Rater',
      description: 'Rater RestFull docs',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(routes)

app.listen({
  port:env.SERVER_PORT
}).then(()=> console.log(`Server Running 🤟🏻: PORT:${env.SERVER_PORT}`))
