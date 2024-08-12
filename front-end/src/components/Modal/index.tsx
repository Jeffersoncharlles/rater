import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

const DialogRoot = styled(Dialog.Root)``

DialogRoot.displayName = 'DialogRoot'

const DialogTitle = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  >h1{
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
  }

  >p{
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.225rem;
  }

`

const DialogOverlay = styled(Dialog.Overlay)`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(8px);
  /* animation: 150ms cubic-bezier(0.16, 1, 0.3, 1); */
`

const DialogTrigger = styled(Dialog.Trigger)`
`

// const DialogContent = ({children}:{children:React.ReactNode}) => {
//   return (
//     <Content>
//       <DialogOverlay />
//       {children}
//     </Content>
//   )
// }

const DialogDescription = styled(Dialog.Description)`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.225rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: 4px;

`

const DialogPortal = styled(Dialog.Portal)``


const DialogContent = styled(Dialog.Content)`
  background: ${({ theme }) => theme.COLORS.GRAY_950};
  z-index: 3;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;

  padding: 3rem;

`

const DialogClose = styled(Dialog.Close)``

export {
  DialogContent,
  DialogOverlay,
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogTitle,
  DialogDescription,
  DialogClose
}
