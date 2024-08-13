import { api } from "../lib/axios"


interface Profile {
  name: string
  username: string | null
  email:string
}

interface BodyUpdate{
    fullName: string;
    email: string;
    username: string | null;
}

export const UpdateProfile = async ({email,name,username }:Profile) => {

  try {
    await api.put<BodyUpdate>('/account', {
      fullName: name,
      email,
      username
    })

  // if (response.data.profile) {
  //   return response.data
  // }
  // if (response.data) {
  //   return response.data.
  // }

  } catch (error) {
    console.log(error)
  }
}
