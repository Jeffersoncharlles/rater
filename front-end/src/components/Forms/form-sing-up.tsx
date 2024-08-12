import { useForm } from "react-hook-form"
import { DialogDescription, DialogTitle } from "../Modal"
import { Button } from "../ui/Button"
import { InputForm } from "../ui/inputForm"
import { BoxInput, Container } from "./styles-sign-in"
import {  z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUp } from "../../http/sign-up"


const signUpSchema = z.object({
  name: z.string().refine((value) => value.split(' ').length > 1, {
      message: 'Por favor digite seu nome completo',
    }),
  email: z.string().email("E-mail inválido"),
  password: z
      .string()
      .min(8,{ message: 'Mínimo 8 caracteres' }),
    password_confirm: z.string(),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: 'Senhas diferentes',
    path: ['password_confirm'],
})

type schemaSignUp = z.infer<typeof signUpSchema>

interface FormSignUpProps {
  setSubmit:()=>void
}

export const FormSignUp = ({ setSubmit}:FormSignUpProps) => {
  const { register,handleSubmit,setError, formState: { errors } } = useForm<schemaSignUp>({
    resolver:zodResolver(signUpSchema)
  })

  const handleSignUp = async (data:schemaSignUp) => {
    try {
      const { email, name, password } = data

      const response = await signUp({ name, email, password })
      if (response?.token) {
        localStorage.setItem('accessToken', JSON.stringify(response.token))
          setSubmit()
      }
      if (response?.message) {
        setError("email",{message:response.message})
      }
    } catch (error) {
        console.error(error)
    }
  }

  return (
     <>
      <DialogTitle asChild>
        <h1>Crie sua conta</h1>
      </DialogTitle>
      <DialogDescription>
        Insira seus dados para completar o cadastro.
      </DialogDescription>
      <form  onSubmit={handleSubmit(handleSignUp)} >
        <Container>
          <BoxInput>
            <label htmlFor="name">Nome completo</label>
            <InputForm
              {...register('name')}
              id="name"
              type="text"
              placeholder="Nome completo"
            />
            {errors.name && <p>{errors.name.message}</p>}

          </BoxInput>
          <BoxInput>
            <label htmlFor="email">E-mail </label>
            <InputForm
              {...register('email')}
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </BoxInput>
          <BoxInput>
            <label htmlFor="password">Senha</label>
            <InputForm
              {...register('password')}
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </BoxInput>
          <BoxInput>
            <label htmlFor="password_confirm">Confirmar senha</label>
            <InputForm
              {...register('password_confirm')}
              id="password_confirm"
              type="password"
              placeholder="Confirmar senha"
            />
            {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
          </BoxInput>
        </Container>
        <Button type="submit" className="top">
          Cadastrar
        </Button>
      </form>
    </>
  )
}
