import styled from "styled-components";


export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
`


export const SectionHightLight = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`


export const ContainerBigCard = styled.div`
  flex: 1;
  /* Animation=Fill */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 48px;
gap: 12px;

margin: 0 auto;

height: 50rem;

background: linear-gradient(180deg, rgba(0, 0, 0, 0) 17.12%, #000000 100%), url(image.png);
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 24px;

/* Inside auto layout */
/* flex: none;
order: 1;
flex-grow: 0; */


  >div{



  }
`

export const MovieDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: absolute;

    padding-bottom: 12px;
    gap: 12px;
`


export const Heading2xl = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 700;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 12px;
`
