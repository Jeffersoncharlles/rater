import styled from "styled-components";



//####################################################################################################//
export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (min-width: 1024px) {
    margin: 0 10px;
  }

`
//####################################################################################################//


export const SectionHightLight = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
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

  color: ${({ theme }) => theme.COLORS.WHITE};

`


export const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 20;
`
//####################################################################################################//
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 12px;
`



//####################################################################################################//

export const Overview = styled.div`
  display: flex;
  width: 35rem;

  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 500;

  margin-bottom: 3rem;
`
//####################################################################################################//
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  gap: 60px;

  width: 380px;
  height: 253.67px;
  z-index: 1;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  position: relative;

  /* >div{
    display: flex;
    flex-direction: column;
    gap: 28px;
    height: 100%;
  } */

`
export const OverlayCard = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  position: absolute;
  border-radius: 24px;
  inset: 0;

`
