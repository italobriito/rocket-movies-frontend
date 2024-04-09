import {Container} from "./styles"
import {FiPlus} from "react-icons/fi"

import Header from "../../components/Header"
import Button from "../../components/Button"
import Card from "../../components/Card"

export default function Home() {
  return(
    <Container>

      <Header/>

      <div  className="titulo-superior">

        <h1> Meus filmes</h1>
        
        <Button 
        Icon={FiPlus}
        title=" Adicionar filme"
        />

      </div>

      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      

      
    </Container>
  )
}