import { useState } from "react"
import { DialogTitle } from "../Modal"
import { InputForm } from "../ui/inputForm"
import { BoxInput ,Container} from "./styles-sign-in"
import { Button } from "../ui/Button"






export const FormSignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()

    // if (email !== '' && password !== '') {
    //   authenticate(username, password)
    // }

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
        </Container>


        <Button className="top">
          Fazer login
        </Button>

      </form>


    </>
  )
}
