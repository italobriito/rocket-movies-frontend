import {FiMail, FiLock} from "react-icons/fi"

import {Container,Form,Background} from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu login</h2>

        <Input 
          icon={FiMail}
          type="text"
          placeholder=" E-mail"
        />

        <Input 
          icon={FiLock}
          type="passord"
          placeholder="Senha"
        />
        

        <Button title="Entrar"/>

        <a href="">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}