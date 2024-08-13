import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '../../../ui/Button';
import { AlertContent, AlertDescription, AlertOverlay, AlertTitle, BoxContent } from './styles';
import { DeleteAccount } from '../../../../http/delete-account';
import { useAuthStore } from '../../../../lib/zustand/authStore';
import { useNavigate } from 'react-router-dom';

export const AlertDelete = () => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  const handleDeleteAccount = async () => {
    await DeleteAccount()
    logout()
    navigate('/')
  }

  return (

    <AlertDialog.Portal>
      <AlertOverlay />
      <AlertContent>
        <AlertTitle>
          Encerramento da conta
        </AlertTitle>
        <AlertDescription>
          Tem certeza de que deseja deletar sua conta? Esta ação é irreversível e todos os seus dados serão permanentemente excluídos.
        </AlertDescription>
        <BoxContent>
          <AlertDialog.Cancel asChild>
          <Button className='xl'>
            Cancelar
          </Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          <Button className='primitive xl' onClick={handleDeleteAccount}>
            Confirmar
          </Button>
        </AlertDialog.Action>
        </BoxContent>
      </AlertContent>
    </AlertDialog.Portal>
  )
}
