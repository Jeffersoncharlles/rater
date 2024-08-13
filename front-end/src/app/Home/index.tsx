import { Flame, Play, Star } from "lucide-react"
import { CardContainer, ContainerBigCard, ContainerCards, ContainerMain, Heading2xl, MovieDetailsCard, Overview, SectionHightLight } from "./style"
import { HightLightText } from "../../components/ui/HightLightText"
import { HightLightDetails } from "../../components/ui/HightLightDetails"
import { HightLightButton } from "../../components/ui/HightLightButton"
import { Links } from "../../utils/links-array"


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
                8.2 <strong>
                    Comedy, Action, Adventure, Superhero...
                    </strong>
              </span>
            </HightLightDetails>
            <Overview>
              Deadpool recebe uma oferta da Autoridade de Variância
              Temporal para se juntar ao Universo Cinematográfico Marvel,
              mas em vez disso recruta uma variante do
              Wolverine para salvar seu universo da extinção.
            </Overview>

            <HightLightButton className="mb" >
              Assistir ao trailer
              <Play />
            </HightLightButton>
          </MovieDetailsCard>
        </ContainerBigCard>
        <ContainerCards>
          <CardContainer urlImage={Links[0]}>
            <HightLightText>
               <Flame />
              Em destaque
            </HightLightText>
            <Heading2xl>
              Deadpool & Wolverine
            </Heading2xl>
             <HightLightButton className="mb" >
              Assistir ao trailer
              <Play />
            </HightLightButton>
          </CardContainer>
          <CardContainer urlImage={Links[1]}>
            <HightLightText>
               <Flame />
              Em destaque
            </HightLightText>
            <Heading2xl>
              Deadpool & Wolverine
            </Heading2xl>
             <HightLightButton className="mb" >
              Assistir ao trailer
              <Play />
            </HightLightButton>
          </CardContainer>
          <CardContainer urlImage={Links[2]}>
            <HightLightText>
               <Flame />
              Em destaque
            </HightLightText>
            <Heading2xl>
              Deadpool & Wolverine
            </Heading2xl>
             <HightLightButton className="mb" >
              Assistir ao trailer
              <Play />
            </HightLightButton>
          </CardContainer>
        </ContainerCards>
      </SectionHightLight>
    </ContainerMain>
  )
}
