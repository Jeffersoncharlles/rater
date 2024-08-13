import styled from "styled-components";


//####################################################################################################//
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`
//####################################################################################################//

export const BoxInput = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 100%;

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

  >p{
   margin-left: 8px;
   font-size: 12px;
   font-weight: 400;
   line-height: 12px;
   color: ${({theme})=>theme.COLORS.RED_400};
  }
`
//####################################################################################################//


export const Form = styled.form`

`
//####################################################################################################//
