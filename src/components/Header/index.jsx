import {Container, Content, Profile} from "./styles";

import Input from "../Input"

export default function Header(){
  return(
    <Container>
      <Content>
        <h1>RocketMovies</h1>

        <div className="input">

          <Input placeholder=" Pesquisar pelo título"/>

        </div>
        

        <Profile to="/profile"> 

          <div>
            <p>Italo Brito</p>
            <span>Sair</span>
          </div>

          <img src="https://github.com/italobriito.png" alt="Foto do usuário" />

        </Profile>

      </Content>
      
    </Container>
  )
}
