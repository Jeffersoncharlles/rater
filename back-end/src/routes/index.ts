import { FastifyInstance } from "fastify";
import { createAccount } from "./auth/create-account";


export const routes = async (app: FastifyInstance) => {
  createAccount(app)
}
