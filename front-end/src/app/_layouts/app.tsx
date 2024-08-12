import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useAuthStore } from "../../lib/zustand/authStore";
import { useEffect } from "react";

export function AppLayout() {
  const { authenticate,isLoggedIn } = useAuthStore()

  useEffect(() => {
      authenticate()
  },[isLoggedIn, authenticate])

  return (
    <Container >
      <Header />
      <div>
         <Outlet />
      </div>
    </Container>
  )
}
