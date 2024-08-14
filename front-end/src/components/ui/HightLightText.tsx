import React from "react"
import styled from "styled-components"

type HightLightTextProps = React.ComponentProps<'div'>

//####################################################################################################//
const Span = styled.div<HightLightTextProps>`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  font-weight: 600;

  width: 10rem;
  text-align: center;

  color: ${({theme})=>theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 8px;
  gap: 4px;

  &.trailer{
    width: rem;
  }

  &.sm{
    width:4rem;
    padding: 4px;
  }

  //Glassmorphism
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(20px);
  box-shadow: 2px 3px 28px -8px rgba(0,0,0,0.75);
`
//####################################################################################################//
//####################################################################################################//
export const HightLightText = React.forwardRef<HTMLDivElement, HightLightTextProps>(
  ({ ...props }, ref) => {
    return <Span
      {...props}
      ref={ref}

    />
})
//####################################################################################################//
