import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"

import {Link} from 'react-router-dom'

import {Container,Form,Background} from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />

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
        
        <Button title="Cadastrar"/>

        <Link to="/" className="link" >
          <FiArrowLeft/>
          Voltar para o login
        </Link>
        
      </Form>

      <Background />
    </Container>
  )
}