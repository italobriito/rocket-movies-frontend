import {FiArrowLeft} from "react-icons/fi"

import { Container } from "./styles"

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

      <div className="content">

        

        <BackButton
          Icon={FiArrowLeft}
          title="Voltar"
        />


        <section className="movie-informations">

          <h1>Novo filme</h1>

          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder=" Sua nota (de 0 a 5)" />
          </div>

          <Textarea
           placeholder="Observações"
          />

        </section>
        
        

        <section>

          <h2>Marcadores</h2>
          
          <div className="markers">

            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>

          </div>

          
        </section>

        <div className="actions-buttons">

          <Button className="delete" title=" Exclui filme "/>
          <Button title="Salvar alterações"/>
          

        </div>
        


        
        
      </div>

    </Container>
  )
}