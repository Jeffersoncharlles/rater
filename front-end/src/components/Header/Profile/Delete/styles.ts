import styled from "styled-components";
import * as AlertDialog from '@radix-ui/react-alert-dialog';


export const AlertOverlay = styled(AlertDialog.Overlay)`
  position: absolute;
  inset: 0;
  z-index: 4;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
`


export const AlertContent = styled(AlertDialog.Content)`
 background: ${({ theme }) => theme.COLORS.GRAY_950};
  z-index: 5;
  border-radius: 24px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 400px;
  max-height: 85vh;

  padding: 2rem;

  display: flex;
  flex-direction: column;

  border: 2px solid ${({theme})=>theme.COLORS.GRAY_500};

`


export const AlertTitle = styled(AlertDialog.Title)`
font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin-bottom: 12px;

`


export const AlertDescription = styled(AlertDialog.Description)`
    font-size: 14px;
    line-height: 1.225rem;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.GRAY_50};

`


export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;

  margin-top: 12px;
`
