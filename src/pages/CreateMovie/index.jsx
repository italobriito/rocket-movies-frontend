import {FiArrowLeft} from "react-icons/fi"

import { Link } from "react-router-dom"

import { Container, Content, MovieInformations, Inputs, Markers, ActionButtons} from "./styles"

import Header from "../../components/Header"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Textarea from "../../components/Textarea"
import NoteItem from "../../components/NoteItem"

export default function CreateMovie(){
  return(
    <Container> 

      <Header/>

      <Content>

        <Link to="/" className="link" >
          <FiArrowLeft/>
          Voltar 
        </Link>
      
       
        <MovieInformations>

          <h1>Novo filme</h1>

          <Inputs>
            <Input placeholder="Título" />
            <Input placeholder=" Sua nota (de 0 a 5)" />
          </Inputs>

          <Textarea
           placeholder="Observações"
          />

        </MovieInformations>
        
        

        <Markers>

          <h2>Marcadores</h2>
          
          <div className="markers">

            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>

            

          </div>

          
        </Markers>

        <ActionButtons>

          <Button className="delete" title=" Exclui filme "/>
          <Button className="save" title="Salvar alterações"/>
          

        </ActionButtons>
        
 
      </Content>

    </Container>
  )
}