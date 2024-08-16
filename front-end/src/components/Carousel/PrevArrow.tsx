import { ChevronLeft } from "lucide-react"


interface PrevArrowSliderProps {
  prevArrowSlider?:()=>void
}

export const PrevArrowSlider = ({prevArrowSlider }:PrevArrowSliderProps) => {
  return <ChevronLeft
    onClick={prevArrowSlider}

  />
}
