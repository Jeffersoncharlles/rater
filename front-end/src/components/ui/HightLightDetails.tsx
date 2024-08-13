import { ReactNode } from "react"
import styled from "styled-components"


//####################################################################################################//
const Span = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 24px;

 >span{
  display: flex;
  align-items: center;
  gap: 8px;

  >svg{
    fill: ${({ theme }) => theme.COLORS.YELLOW_300};
    color: transparent;
  }

  >strong{
    font-size: 14px;
    font-family: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
 }

`
//####################################################################################################//
export const HightLightDetails = ({children}: {children:ReactNode}) => {
  return <Span>
    {children}
  </Span>
}
//####################################################################################################//
