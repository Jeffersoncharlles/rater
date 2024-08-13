import styled from "styled-components";


//####################################################################################################//
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 12px;
gap: 8px;

color: ${({theme})=>theme.COLORS.WHITE};
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

  &.delete{
    padding: 14px 42px;
    background:${({ theme }) => theme.COLORS.RED_500 };
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.21rem;
    color: ${({ theme }) => theme.COLORS.RED_400 };
  }

  &.primitive{
    padding: 12px 24px;
    border-radius: 12px;
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GRAY_950};

    font-size: 1rem;
    line-height: 1.21rem;
    font-weight: 700;

    &:hover{
      opacity: .8;
    }
  }
`
//####################################################################################################//
