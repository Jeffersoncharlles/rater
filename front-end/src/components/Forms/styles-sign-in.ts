import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`


export const BoxInput = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 100%;


/* Inside auto layout
flex: none;
order: 2;
align-self: stretch;
flex-grow: 0; */


  >label{
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    position: relative;

    &::after{
      content: "*";
      position: absolute;
      top: 0;
      color: ${({theme})=>theme.COLORS.RED_400};


    }
  }
`



export const Form = styled.form`

`
