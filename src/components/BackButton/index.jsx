import {Container} from "./styles"

export default function BackButton( {Icon:Icon, title}){
  return(
    <Container type="button">

      {Icon && <Icon size={20} />}

      {title}
      
    </Container>
  )
}