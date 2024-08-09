
import { Search, SlidersHorizontal } from "lucide-react"
import { Button, ButtonIcon, HeaderContainer, InputContainer, SectionContainer } from "./styles"


export const Header = () => {
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

      <Button>
        Login
      </Button>
    </HeaderContainer>
  )
}
