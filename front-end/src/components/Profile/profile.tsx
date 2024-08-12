import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"



export const Profile = () => {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="">
          Perfil
        </button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
