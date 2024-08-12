import { api } from "../lib/axios"

interface ISignUp{
  name: string
  email: string
  password: string
}

type AccountBody = {
  token: string
  message?: string
}

export const signUp = async ({name,email,password}:ISignUp) => {
 try {
  const {data} = await api.post<AccountBody>('/account', {
    name,
    email,
    password
 })

  if (data.token) {
    return data
  }

   if (data.message) {
     return data
   }
 } catch (error) {
  console.log(error)
 }

}
