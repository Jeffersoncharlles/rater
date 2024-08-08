import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,#root{
  height: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_950};
  color: ${({theme})=>theme.COLORS.WHITE};
}

*,button,input{
  border: 0;
  outline: 0;
  font-family: 'Inter',sans-serif;
}

button{
    cursor: pointer;
}
`
