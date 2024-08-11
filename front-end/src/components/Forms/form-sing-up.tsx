import { useState } from "react"
import { DialogTitle } from "../Modal"
import { Button } from "../ui/Button"
import { InputForm } from "../ui/inputForm"
import { BoxInput, Container } from "./styles-sign-in"


export const FormSignUp = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
  }


  return (
     <>
      <DialogTitle>
        <h2>Acesse sua conta</h2>
        <p>Bem vindo de volta! Entre com seus dados.</p>
      </DialogTitle>
      <form onSubmit={handleSubmit} >
        <Container>
          <BoxInput>
            <label htmlFor="email">Name</label>
            <InputForm
              id="name"
              type="text"
              value={email}
              placeholder="Digite seu e-mail"
              onChange={(e)=>setEmail(e.target.value)}

            />
          </BoxInput>
          <BoxInput>
            <label htmlFor="email">E-mail </label>
            <InputForm
              id="email"
              type="email"
              value={email}
              placeholder="Digite seu e-mail"
              onChange={(e)=>setEmail(e.target.value)}

            />
          </BoxInput>
          <BoxInput>
            <label htmlFor="password">Senha</label>
            <InputForm
              id="password"
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </BoxInput>
          <BoxInput>
            <label htmlFor="password_confirm">Senha</label>
            <InputForm
              id="password_confirm"
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </BoxInput>
        </Container>


        <Button className="top">
          Fazer login
        </Button>

      </form>


    </>
  )
}
