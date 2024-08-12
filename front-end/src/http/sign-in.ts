import { api } from "../lib/axios"

interface ISignIn{
  email: string
  password: string
}

type AccountBody = {
  token: string
  message?: string
}

export const signIn = async ({email,password}:ISignIn) => {

  try {
      const response = await api.post<AccountBody>('/session', {
    email,
    password
 })

  if (response.data.token) {
    return response.data
  }
  if (response.data.message) {
    return response.data
  }

  } catch (error) {
    console.log(error)
  }
}
