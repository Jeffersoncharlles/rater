
import { useAuthStore } from "../../../lib/zustand/authStore"

import  * as  Dialog  from "@radix-ui/react-dialog"
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu"
import {   DialogOverlay } from "../../Modal"
import {
  Close,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Title,
  Content,
  Description,
  BoxDescription,
  BoxContainerInputNames,
  BoxContainerInput,
  BoxContainerSave,
} from "./styles"
import {LogOut, UserRound, X } from "lucide-react"
import { InputForm } from "../../ui/inputForm"
import { Button } from "../../ui/Button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateProfile } from "../../../http/update-profile"
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { AlertDelete } from "./Delete/alertDialog"
import { useEffect, useMemo, useState } from "react"

const profileSchema = z.object({
  name: z.string().refine((value) => value.split(' ').length > 1, {
      message: 'Por favor digite seu nome completo',
    }),
  username: z.string({}).min(4,{
      message: 'Digite seu nome de usuário',
    }).max(16,{message:'Pode Conter no máximo 16 caracteres'}).nullable(),
  email: z.string().email("E-mail inválido"),
})

type updateSchemaProfile = z.infer<typeof profileSchema>

export const Profile = () => {

  const [open, setOpen] = useState(false);

  const { logout, accountProfile, refresh } = useAuthStore()


  const { register, handleSubmit ,reset,formState: {
    errors
  } } = useForm<updateSchemaProfile>({
    resolver: zodResolver(profileSchema),
    defaultValues: useMemo(() => {
      return {
        email: accountProfile?.profile.email,
        name: accountProfile?.profile.fullName,
        username:accountProfile?.profile.userName
        }
    }, [accountProfile])
  })


  const handleUpdateProfile = async (data: updateSchemaProfile) => {
    try {
      const { email, name, username } = data
      await UpdateProfile({ email, name, username })
      refresh()
      setOpen(!open)
    } catch (error) {
      console.log(error)
    }
  }

  const handleProfileUpdateModal = async (e: Event) => {
    e.preventDefault()
  }

  useEffect(()=>{
    reset({
        email: accountProfile?.profile.email,
        name: accountProfile?.profile.fullName,
        username:accountProfile?.profile.userName
    })
  },[accountProfile?.profile, reset])

  const name = accountProfile?.profile.userName  ?? accountProfile?.profile.fullName.split(' ')[0]

  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger> {name ?? 'Usuário'} </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger  asChild>
            <DropdownMenuItem aria-modal onSelect={handleProfileUpdateModal}>
              <UserRound /> Perfil
            </DropdownMenuItem>
          </Dialog.Trigger>
          <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>logout()} >
              <LogOut /> Desconectar
          </DropdownMenuItem>
          <Dialog.Portal>
            <DialogOverlay />
            <Content>
              <Title>
                Preferências da conta
              </Title>
              <Description  asChild>
                  <BoxDescription>
                    <h2>Usuário</h2>
                    <p>Faça a edição do seu nome de usuário e de seu nome.</p>
                  </BoxDescription>
              </Description>

              <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <BoxContainerInputNames>
                  <BoxContainerInput>
                    <label htmlFor="username">Nome de usuário</label>
                    <InputForm
                      {...register('username')}
                      className="full"
                      type="text"
                      id="username"
                    />
                     {errors.username && <p>{errors.username.message}</p>}
                  </BoxContainerInput>

                  <BoxContainerInput>
                    <label htmlFor="name">Nome completo</label>
                    <InputForm
                      {...register('name')}
                       className="full"
                      type="text"
                      id="name"
                    />
                     {errors.name && <p>{errors.name.message}</p>}
                  </BoxContainerInput>
                </BoxContainerInputNames>


                <div>
                  <BoxDescription>
                    <h2>E-mail</h2>
                    <p>O e-mail não pode ser editado, apenas visualizado.</p>
                  </BoxDescription>
                  <BoxContainerInputNames>
                    <BoxContainerInput>
                    <label htmlFor="email">E-mail</label>
                      <InputForm
                        {...register('email')}
                      className="full"
                      type="email"
                      id="email"
                      disabled
                    />
                  </BoxContainerInput>
                  </BoxContainerInputNames>
                </div>


                <BoxDescription className="delete">
                    <h2>Encerramento da conta</h2>
                    <p>Ao deletar sua conta, todos os seus dados serão permanentemente excluídos. Esta ação é irreversível.</p>
                </BoxDescription>
                <AlertDialog.Root>
                  <AlertDialog.Trigger asChild>
                    <Button  className="delete">
                      Deletar conta
                    </Button>
                  </AlertDialog.Trigger>
                    <AlertDelete />
                </AlertDialog.Root>

                <BoxContainerSave>
                  <Button className="primitive" type="submit">
                    Salvar alterações
                  </Button>
                </BoxContainerSave>
              </form>


              <Close  >
                  <X />
              </Close>
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
