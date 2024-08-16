import styled from "styled-components";

type CardContainerProps = React.ComponentProps<'div'> & {
  imageurl?:string
}

export const CardContainer = styled.div<CardContainerProps>`
   display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 24px;
    gap: 60px;

    max-width: 21rem;
    height: 253.67px;


    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({imageurl})=>imageurl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 24px;

`
