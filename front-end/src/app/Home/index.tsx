import {  ChevronRight, Clapperboard, Flame, Play, Star } from "lucide-react"
import { BoxSectionSlidersTitle, BoxSectionWatchers, BoxSlider, CardContainer, ContainerBigCard, ContainerCards, ContainerMain, Heading2xl, HeadingLg, MovieDetailsCard, OverlayCard, Overview, SectionHightLight } from "./style"
import { HightLightText } from "../../components/ui/HightLightText"
import { HightLightDetails } from "../../components/ui/HightLightDetails"
import { HightLightButton } from "../../components/ui/HightLightButton"
import { Links } from "../../utils/links-array"
import { SlickCarousel } from "../../components/Carousel"
import { Card } from "../../components/Card"
import { Button } from "../../components/ui/Button"
import { PrevArrowSlider } from "../../components/Carousel/PrevArrow"



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
          {Links.map((link, index) => {
            return (
              <CardContainer style={{ backgroundImage: `url(${link.imageUrl})` }} key={index}>
                <OverlayCard />

                  <HightLightText className="sm" >
                  <HightLightDetails>
                    <span>
                      <Star />
                    {link.rating}
                    </span>
                  </HightLightDetails>
                </HightLightText>
                <HeadingLg>
                  {link.title}
                </HeadingLg>
                <HightLightButton className="mb" >
                  Assistir ao trailer
                  <Play />
                </HightLightButton>
              </CardContainer>
            )
          })}
        </ContainerCards>
      </SectionHightLight>
      <BoxSlider>
        <BoxSectionSlidersTitle>
          <h2>Últimos lançamentos</h2>
          <div>
            <PrevArrowSlider />
            <ChevronRight />
          </div>
        </BoxSectionSlidersTitle>
        <SlickCarousel >
          {Links.map((link, index) => {
            return (
              <Card key={index} imageUrl={link.imageUrl} />
            )
          })}
        </SlickCarousel>
      </BoxSlider>
      <div>
        <h2>Filmes assistidos</h2>
        <BoxSectionWatchers>
          <Clapperboard />
          <div>
            <h3>
            Ops, nenhum filme avaliado ainda.
          </h3>
          <p>Que tal adicionar um?</p>
          </div>
          <Button>
            Fazer login
          </Button>
        </BoxSectionWatchers>
      </div>
    </ContainerMain>
  )
}
