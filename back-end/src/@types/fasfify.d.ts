import 'fastify';

declare module 'fastify' {
  export interface FastifyRequest {
    useId(): Promise<string>
  }
}
