import * as React from 'react'

import styled from "styled-components"

type InputProps = React.ComponentProps<'input'>

//####################################################################################################//
const Input = styled.input`
  display: flex;
  border-radius: .75rem;
  padding: .75rem;

  background: ${({theme})=> theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &.full{
    width: 100%;
  }

  &:disabled{
     background: ${({theme})=> theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    cursor: none;
  }
`
//####################################################################################################//
//####################################################################################################//
export const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
  return (
    <Input
      ref={ref}
      {...props}

    />
  )
}
)
//####################################################################################################//
