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

`
