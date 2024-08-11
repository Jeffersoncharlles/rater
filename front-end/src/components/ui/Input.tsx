import { ReactNode } from "react"
import styled from "styled-components"



const InputContainer = styled.input`
  display: flex;
  flex: 1;
  height: 48px;
  padding: 16px;

  color: ${({theme})=>theme.COLORS.WHITE};
  background: transparent;
  &:focus{
      cursor: text;
  }
`

export const Input = ({children}: {children:ReactNode}) => {
  return <InputContainer>
    {children}
  </InputContainer>
}
