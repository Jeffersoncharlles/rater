
import { Search, SlidersHorizontal } from "lucide-react"
import {
  Button,
  ButtonIcon,
  HeaderContainer,
  InputContainer,
  Link,
  SectionContainer
} from "./styles"
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger
} from "../Modal"
import { FormSignIn } from "../Forms/form-sign-in"
import { useState } from "react"
import { FormSignUp } from "../Forms/form-sing-up"
import { useAuthStore } from "../../lib/zustand/authStore"
import { Profile } from "../Profile/profile"


export const Header = () => {
  const {isLoggedIn } = useAuthStore()

  const [signUp,setSignUp] = useState(false)


  return (
    <HeaderContainer>
      <img src="rater.svg" alt="logo rater" />
      <SectionContainer>
        <div>
          <Search />
          <InputContainer />
        </div>
        <ButtonIcon>
          <SlidersHorizontal />
        </ButtonIcon>
      </SectionContainer>

      {isLoggedIn && (
        <Profile />
      )}


      {!isLoggedIn && (
        <DialogRoot onOpenChange={() => setSignUp(false)}>
          <DialogTrigger asChild>
            <Button >
              Login
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent>
              {signUp === true ? (
                <>
                  <FormSignUp />
                  <Link>
                    Já tem uma conta?
                    <button onClick={() => setSignUp(false)}>
                      Fazer login
                    </button>
                  </Link>
                </>


              ) : (
                <>
                  <FormSignIn />
                  <Link>
                    Não tem uma conta ainda?
                    <button onClick={() => setSignUp(true)}>
                      Criar conta
                    </button>
                  </Link>
                </>
              )}
            </DialogContent>
          </DialogPortal>
        </DialogRoot>
      )}

    </HeaderContainer>
  )
}
