import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom';

import  Input  from '../../components/Input'
import  Button  from '../../components/Button'

import { Container, Form, Avatar } from "./styles";

export default function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/italobriito.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Italo Diego Brito Parente"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="italobrito.96@outlook.com"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova atual"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}