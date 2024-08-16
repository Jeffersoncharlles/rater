import { Play, Star } from "lucide-react"
import { HightLightDetails } from "../ui/HightLightDetails"
import { HightLightText } from "../ui/HightLightText"
import { CardContainer } from "./styles"
import { HeadingLg } from "../../app/Home/style"
import { HightLightButton } from "../ui/HightLightButton"

interface CardProps {
  imageUrl:string
}

export const Card = ({imageUrl }:CardProps) => {


  return (
    <CardContainer imageurl={imageUrl}>
       <HightLightText className="sm" >
        <HightLightDetails>
          <span>
            <Star />
          8.6
          </span>
        </HightLightDetails>
        </HightLightText>
          <HeadingLg>
            algo
          </HeadingLg>
        <HightLightButton className="mb" >
          Assistir ao trailer
          <Play />
        </HightLightButton>
    </CardContainer>
  )
}
