import styled from "styled-components";
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu"
import * as  Dialog  from "@radix-ui/react-dialog"


//####################################################################################################//
export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  border-radius: 0.75rem;
  padding: 12px 38px 12px 38px;
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
//####################################################################################################//
export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 148px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  border-radius: 6px;
  padding: 5px;
  margin-top: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  border-radius: 8px;
  z-index: 2;

`
//####################################################################################################//
export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin: 5px;

`
//####################################################################################################//
export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.COLORS.GRAY_800};
  height: 12px;
  width: 24px;
`
//####################################################################################################//
export const DropdownMenuItem = styled(DropdownMenu.Item)`
  display: flex;
  gap: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  cursor: pointer;

&:hover{
    opacity: 0.8;
  }
`

//####################################################################################################//
export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8rem;
`
//####################################################################################################//
export const Close = styled(Dialog.Close)`
all: unset;
font-family: inherit;
height: 25px;
width: 25px;
background: transparent;
display: inline-flex;
justify-content: center;
position: absolute;
top: 20px;
right: 10px;
cursor: pointer;

&:hover{
  opacity: .7;
}
`
//####################################################################################################//
export const Description = styled(Dialog.Description)`
`

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;

  >h2{
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
  }

  p{
    font-size: 14px;
    line-height: 1.225rem;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.GRAY_50};
  }

  &.delete{
    margin-bottom: 12px;
  }

`


//####################################################################################################//
export const Content = styled(Dialog.Content)`
  background: ${({ theme }) => theme.COLORS.GRAY_950};
  z-index: 3;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 50rem;
  max-height: 85vh;

  padding: 1.5rem;

`
//####################################################################################################//

export const BoxContainerInputNames = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`


export const BoxContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
`


export const BoxContainerSave = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
`
