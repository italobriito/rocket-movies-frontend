import {FiArrowLeft} from "react-icons/fi"

import { Container, Content, MovieInformations, Inputs, Markers, ActionButtons} from "./styles"

import Header from "../../components/Header"
import BackButton from "../../components/BackButton"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Textarea from "../../components/Textarea"
import NoteItem from "../../components/NoteItem"

export default function CreateMovie(){
  return(
    <Container> 

      <Header/>

      <Content>

      
        <BackButton
          icon={FiArrowLeft}
          title="Voltar"
        />


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
          <Button title="Salvar alterações"/>
          

        </ActionButtons>
        
 
      </Content>

    </Container>
  )
}