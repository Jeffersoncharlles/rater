
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
import {  useState } from "react"
import { FormSignUp } from "../Forms/form-sing-up"
import { useAuthStore } from "../../lib/zustand/authStore"
import { Profile } from "../Profile/profile"
export const Header = () => {

  const {isLoggedIn } = useAuthStore()
  const [open, setOpen] = useState(false);
  const [openSignInOrSignUp, setOpenSignInOrSignUp] = useState(false);

  function opens() {
    setOpen(!open)
    setOpenSignInOrSignUp(false)
  }




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
        <DialogRoot open={open}  onOpenChange={opens}>
          <DialogTrigger asChild>
            <Button >
              Login
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay />
            <DialogContent>
              {openSignInOrSignUp === true ? (
                <>
                  <FormSignUp setSubmit={()=>setOpen(false)} />
                  <Link>
                    Já tem uma conta?
                    <button onClick={() => setOpenSignInOrSignUp(!openSignInOrSignUp)}>
                      Fazer login
                    </button>
                  </Link>
                </>


              ) : (
                <>
                  <FormSignIn setSubmit={()=>setOpen(false)}/>
                  <Link>
                    Não tem uma conta ainda?
                    <button onClick={() => setOpenSignInOrSignUp(!openSignInOrSignUp)}>
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
