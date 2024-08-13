import styled from "styled-components";



//####################################################################################################//
export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;


/* .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
}

.div1 {
    grid-column: span 3 / span 3;
    grid-row: span 6 / span 6;
}

.div2 {
    grid-row: span 2 / span 2;
    grid-column-start: 4;
}

.div3 {
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 3;
}

.div4 {
    grid-row: span 2 / span 2;
    grid-column-start: 4;
    grid-row-start: 5;
} */

`
//####################################################################################################//


export const SectionHightLight = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
//####################################################################################################//

export const ContainerBigCard = styled.div`
  flex: 1;
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

  >div{



  }
`
//####################################################################################################//
export const MovieDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: absolute;

    padding-bottom: 12px;
    gap: 12px;
`
//####################################################################################################//

export const Heading2xl = styled.h1`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 700;
`
//####################################################################################################//
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 12px;
`
//####################################################################################################//
