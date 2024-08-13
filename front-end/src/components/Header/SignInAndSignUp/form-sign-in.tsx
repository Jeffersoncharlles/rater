import {  DialogDescription, DialogTitle } from "../../Modal"
import { InputForm } from "../../ui/inputForm"
import { BoxInput ,Container} from "./styles-sign-in"
import { Button } from "../../ui/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "../../../http/sign-in"


const signInSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z
      .string()
      .min(8,{ message: 'Mínimo 8 caracteres' }),
  })

type schemaSignIn = z.infer<typeof signInSchema>

interface FormSignInProps {
  setSubmit:()=>void
}

export const FormSignIn = ({ setSubmit}:FormSignInProps) => {


  const { register,handleSubmit,setError,formState: { errors,isSubmitting, } } = useForm<schemaSignIn>({
    resolver: zodResolver(signInSchema)

  })


  const handleSignIn = async (data: schemaSignIn) => {
    try {
      const { email, password } = data
      const response = await signIn({ email, password })
      if (response?.token) {
        localStorage.setItem('accessToken', JSON.stringify(response.token))
          setSubmit()
        }
      if (response?.message) {
        setError("email",{message:response.message})
        setError("password",{message:response.message})
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>

       <DialogTitle asChild>
        <h1>Acesse sua conta</h1>
      </DialogTitle>
      <DialogDescription>
       Bem vindo de volta! Entre com seus dados.
      </DialogDescription>
      <form onSubmit={handleSubmit(handleSignIn)} >
        <Container>
          <BoxInput>
            <label htmlFor="email">E-mail </label>
            <InputForm
              id="email"
              type="email"
              {...register('email')}
              placeholder="Digite seu e-mail"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </BoxInput>
          <BoxInput>
            <label htmlFor="password">Senha</label>
            <InputForm
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
             {errors.password && <p>{errors.password?.message}</p>}
          </BoxInput>
        </Container>


           <Button disabled={isSubmitting} onClick={()=> setSubmit} type="submit" className="top">
           Fazer login
          </Button>
      </form>
    </>
  )
}
