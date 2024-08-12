import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useAuthStore } from "../../lib/zustand/authStore";
import { useEffect } from "react";

export function AppLayout() {
  const { signIn,isLoggedIn } = useAuthStore()

  useEffect(() => {
      signIn()
  },[isLoggedIn, signIn])

  return (
    <Container >
      <Header />
      <div>
         <Outlet />
      </div>
    </Container>
  )
}
