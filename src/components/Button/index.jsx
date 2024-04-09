import {Container} from "./styles"

export default function Button({ Icon: Icon, title }){
  return(
    <Container type="button">

      {Icon && <Icon size={20} />}

      {title}

    </Container>
  )

}