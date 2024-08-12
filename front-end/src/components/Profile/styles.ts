import styled from "styled-components";
// import  * as  Dialog  from "@radix-ui/react-dialog"
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu"

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

`

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin: 5px;

`

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: ${({ theme }) => theme.COLORS.GRAY_800};
  height: 12px;
  width: 24px;
`

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
