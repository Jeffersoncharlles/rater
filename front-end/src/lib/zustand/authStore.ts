import { create } from "zustand"
import { persist } from "zustand/middleware"
import { GetProfile } from "../../http/get-profile"


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
  authenticate: ()=>Promise<void>
  logout: ()=>void
  refresh: ()=>Promise<void>
}


const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      accountProfile: null,
      authenticate: async () => {
        const userLocalStorage = localStorage.getItem('accessToken');

        if (userLocalStorage) {
          set({ isLoggedIn: true });

          const userLoginStatus = localStorage.getItem('userLoginStatus') ?? ""
          const accountPRoff = JSON.parse(userLoginStatus)

          if (accountPRoff.state.accountProfile === null) {
            const account = await GetProfile()
            if (account?.profile) {
              set({ accountProfile: account })
            }
          }

        }
        if (!userLocalStorage) {
          set({ accountProfile: null })
          set({ isLoggedIn: false })
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
      refresh: async () => {
        const userLocalStorage = localStorage.getItem('accessToken');
        if (userLocalStorage) {
          set({ isLoggedIn: true });
        }
        const account = await GetProfile()

        set({ accountProfile: account })
      }

    }),

    {
      name:'userLoginStatus'
    }
  )
)

export {useAuthStore}
