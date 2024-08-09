import styled from "styled-components";


export const Container = styled.main`
  max-width: 90rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;


  >div {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
    margin-top: 1.5rem;
  }
`
