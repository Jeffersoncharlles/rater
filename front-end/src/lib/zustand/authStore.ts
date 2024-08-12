import { create } from "zustand"
import { persist } from "zustand/middleware"
import { GetProfile } from "../../http/get-profile"
import { api } from "../axios"


interface Profile {
  profile: {
    id: string
    fullName: string
    email: string
    userName:string | null
  }
}

interface AuthStore {
  accountProfile:Profile | null;
  isLoggedIn: boolean;
  authenticate: ()=>void
  logout: ()=>void
}


const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      accountProfile:null,
      authenticate: async () => {
        const userLocalStorage = localStorage.getItem('accessToken');

        if (userLocalStorage) {
          set({ isLoggedIn: true });
          api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(userLocalStorage)}`

          const userLoginStatus = localStorage.getItem('userLoginStatus') ?? ""
          const accountPRoff = JSON.parse(userLoginStatus)

          if (accountPRoff.state.accountProfile === null) {
             const account = await GetProfile()
              if (account?.profile) {
                set({accountProfile:account})
              }
          }

        }
        if (!userLocalStorage) {
          set({ accountProfile: null })
          set({isLoggedIn:false})
        }
      },
      logout: () => {
          set({ isLoggedIn: false });
          localStorage.clear();
      }
    }),

    {
      name:'userLoginStatus'
    }
  )
)

export {useAuthStore}
