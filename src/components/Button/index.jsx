import {Container} from "./styles"

export default function Button({ Icon: Icon, title, ...rest }){
  return(
    <Container type="button" {...rest}>

      {Icon && <Icon size={20} />}

      {title}

    </Container>
  )

}