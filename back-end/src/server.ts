import {fastify} from "fastify";
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
import fastifyJwt from "@fastify/jwt";
import { errorHandler } from "./routes/errors/error-handler";

const app = fastify().withTypeProvider<ZodTypeProvider>()

//validation zod
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

//cors
app.register(fastifyCors, {
  origin:"*"
})

//errors handles
app.setErrorHandler(errorHandler)

//docs http://dominio.com/docs
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
//////

//jwt secret
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

//routes
app.register(routes)

//server running
app.listen({
  port:env.SERVER_PORT
}).then(()=> console.log(`Server Running 🤟🏻: PORT:${env.SERVER_PORT}`))
