import * as React from 'react'

import styled from "styled-components"

type HightLightButtonProps = React.ComponentProps<'button'>

//####################################################################################################//
const Button = styled.button`
  /* z-index: 2; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 12px;
  gap: 8px;

  max-width: 14rem;

  color: ${({theme})=>theme.COLORS.WHITE};
  border-radius: 8px;
  gap: 4px;

  >svg{
    fill: ${({ theme }) => theme.COLORS.WHITE};
    height: 20px;
    width: 20px;
  }

  &:hover{
    opacity: .8;
  }

  &.mb{
    margin-bottom: 3rem;
  }

  //Glassmorphism
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(20px);
  box-shadow: 2px 3px 28px -8px rgba(0,0,0,0.75);
`
//####################################################################################################//
//####################################################################################################//
export const HightLightButton = React.forwardRef<HTMLButtonElement, HightLightButtonProps>(
  ({ ...props }, ref) => {
  return (
    <Button
      ref={ref}
      {...props}

    />
  )
}
)
//####################################################################################################//
