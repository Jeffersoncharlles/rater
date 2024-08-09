import styled from "styled-components"



const Separators = styled.div`
  position: absolute;
  height: 2px;
  width: 2px;
  background: ${({theme})=>theme.COLORS.GRAY_700};
`

export const Separator = () => {
  return <Separators/>
}
