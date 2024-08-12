import { DialogDescription, DialogTitle } from "../Modal"
import { InputForm } from "../ui/inputForm"
import { BoxInput ,Container} from "./styles-sign-in"
import { Button } from "../ui/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


const signInSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z
      .string()
      .min(8,{ message: 'Mínimo 8 caracteres' }),
  })

type schemaSignIn = z.infer<typeof signInSchema>

export const FormSignIn = () => {

  const { register,handleSubmit, formState: { errors,isSubmitting } } = useForm<schemaSignIn>({
    resolver:zodResolver(signInSchema)
  })




  const signIn = async () => {



  }

  return (
    <>

       <DialogTitle asChild>
        <h1>Acesse sua conta</h1>
      </DialogTitle>
      <DialogDescription>
       Bem vindo de volta! Entre com seus dados.
      </DialogDescription>
      <form onSubmit={handleSubmit(signIn)} >
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


        <Button disabled={isSubmitting} className="top">
          Fazer login
        </Button>

      </form>


    </>
  )
}
