import styled from "styled-components";


export const HeaderContainer = styled('header')`
  max-width: 90rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 1.5rem;
`

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;

   >div {
    /* border: 1px solid red; */
    width: 320px;
    display: flex;
    align-items: center;
    gap: 4px;
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    border-radius: 99px;
    padding-left: 1rem;
  }

`


export const ButtonIcon = styled.button`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  margin-left: 12px;
  background: ${({ theme }) => theme.COLORS.GRAY_800};

  &:hover{
    opacity: 0.8;
  }

  >svg{
    width: 24px;
    height: 24px;
    color: ${({theme})=>theme.COLORS.WHITE};
  }

`

export const InputContainer = styled.input`
  display: flex;
  flex: 1;
  height: 48px;
  padding: 16px;

  color: ${({theme})=>theme.COLORS.WHITE};
  background: transparent;
  &:focus{
      cursor: text;
  }

`

export const Button = styled.button`
  border-radius: 0.75rem;
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
`


export const Link = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 64px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  >button{
    background: transparent;
    color: ${({theme})=> theme.COLORS.WHITE};
  }

`
