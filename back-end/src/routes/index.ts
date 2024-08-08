import { FastifyInstance } from "fastify";
import { createAccount } from "./account/create-account";
import { session } from "./auth/session";
import { featAllMovies } from "./movies/fetch-all-movies";
import { readAccount } from "./account/read-account";
import { updateAccount } from "./account/update-account";
import { deleteAccount } from "./account/delete-account";


export const routes = async (app: FastifyInstance) => {

  //crud account
  createAccount(app)
  readAccount(app)
  updateAccount(app)
  deleteAccount(app)


  //auth
  session(app)


  //Movies
  featAllMovies(app)
}
