
import { useAuthStore } from "../../lib/zustand/authStore"

import  * as  Dialog  from "@radix-ui/react-dialog"
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu"
import { DialogContent, DialogOverlay } from "../Modal"
import { DropdownMenuArrow, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./styles"
import {LogOut, UserRound } from "lucide-react"

export const Profile = () => {

  const { accountProfile,logout } = useAuthStore()


  const name = accountProfile?.profile.userName ?? accountProfile?.profile.fullName.split(' ')[0]

  return (
    <DropdownMenu.Root>
      <DropdownMenuTrigger> {name} </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <UserRound /> Perfil
            </DropdownMenuItem>
          </Dialog.Trigger>
          <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>logout()} >
              <LogOut /> Desconectar
            </DropdownMenuItem>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
              This is a modal.
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenu.Root>
  )
}
