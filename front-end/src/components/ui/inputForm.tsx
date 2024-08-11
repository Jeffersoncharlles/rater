import styled from "styled-components"

type InputProps = React.ComponentProps<'input'>

const Input = styled.input`
  display: flex;
  border-radius: .75rem;
  padding: .75rem;

  background: ${({theme})=> theme.COLORS.GRAY_800};
  color: ${({theme})=> theme.COLORS.WHITE};

`

export const InputForm = (props:InputProps) => {
  return (
    <Input
      {...props}

    />
  )
}
