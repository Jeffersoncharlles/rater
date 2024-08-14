import { api } from "../lib/axios"


interface Profile {
  profile: {
    id: string
    fullName: string
    email: string
    userName:string | null
  }
  message?:string
}

export const GetProfile = async () => {

  try {
      const response = await api.get<Profile>('/account')
    if (response.data.profile) {

    return response.data
  }
  if (response.data.message) {
    return response.data
  }

  } catch (error) {
    console.log(error)
  }
}
