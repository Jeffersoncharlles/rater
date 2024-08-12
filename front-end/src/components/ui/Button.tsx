import styled from "styled-components";



export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 12px;
gap: 8px;

color: ${({theme})=>theme.COLORS.WHITE};

 width: 100%;

background: ${({theme})=>theme.COLORS.GRAY_800};
border-radius: 12px;

  &.top{
    margin-top: 48px;
  }

  &:hover{
    opacity: 0.85;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    /* border-radius: 0.75rem; */
    padding: 12px 55px 12px 55px;
    gap: 8px;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: ${({theme})=> theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.GRAY_800};

    &:hover{
      opacity: 0.8;
    }
  }


`
