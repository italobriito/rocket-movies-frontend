import {Container, Content} from "./styles";

import Input from "../Input"

export default function Header(){
  return(
    <Container>
      <Content>
        <h1>RocketMovies</h1>

        <div className="input">

          <Input placeholder=" Pesquisar pelo título"/>

        </div>
        

        <div className="profile-informations"> 

          <div>
            <strong>Italo Brito</strong>
            <span>Sair</span>
          </div>

          <img src="https://github.com/italobriito.png" alt="Foto do usuário" />

        </div>

      </Content>
      
    </Container>
  )
}
