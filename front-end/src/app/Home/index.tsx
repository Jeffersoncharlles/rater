import { Flame, Star } from "lucide-react"
import { ContainerBigCard, ContainerCards, ContainerMain, Heading2xl, MovieDetailsCard, SectionHightLight } from "./style"
import { HightLightText } from "../../components/ui/HightLightText"
import { HightLightDetails } from "../../components/ui/HightLightDetails"


export const Home = () => {
  return(
    <ContainerMain>
      <SectionHightLight>
        <ContainerBigCard>

          <MovieDetailsCard>
            <HightLightText>
               <Flame />
              Em destaque
            </HightLightText>
            <Heading2xl>
              Deadpool & Wolverine
            </Heading2xl>

            <HightLightDetails>
              <span>
                <Star />
                8.2
              </span>
            </HightLightDetails>




          </MovieDetailsCard>
        </ContainerBigCard>
        <ContainerCards>
          <div>card1</div>
          <div>card2</div>
          <div>card3</div>
        </ContainerCards>
      </SectionHightLight>
    </ContainerMain>
  )
}
