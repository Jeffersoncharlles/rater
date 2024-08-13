import { api } from "../lib/axios"


interface Delete {

  message?:string
}

export const DeleteAccount = async () => {

  try {
      const response = await api.delete<Delete>('/account')

  if (response.data.message) {
    return response.data
  }

  } catch (error) {
    console.log(error)
  }
}
