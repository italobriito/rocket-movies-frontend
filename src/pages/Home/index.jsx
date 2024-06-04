import {Container, Title,Content} from "./styles"
import {FiPlus} from "react-icons/fi"

import Header from "../../components/Header"
import Button from "../../components/Button"
import Card from "../../components/Card"

export default function Home() {
  return(
    <Container>

      <Header/>

      <Title>

        <h1> Meus filmes</h1>
        
        <Button 
        icon={FiPlus}
        title=" Adicionar filme"
        />

      </Title>

      <Content>

        <Card />
        <Card />
        <Card />
        <Card />

      </Content>

      
    </Container>
  )
}