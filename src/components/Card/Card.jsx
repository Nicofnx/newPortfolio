import { Container, Logo, Tittle, Description,ImgProyect } from './card.styles'
import FeatherIcon from 'feather-icons-react';

const Card = (props) =>{

  const {logo = null,tittle, description, imgProyect=null, needButtom=false} = props

  return(
    <Container>
      <Logo>
        <FeatherIcon icon={logo}/>
      </Logo>
      <Tittle>
        {tittle}
      </Tittle>
      <Description>
        {description}
      </Description>
      <ImgProyect src={imgProyect}/>
      {(needButtom)
        ?<button>Hola</button>
        :null}

    </Container>
  )
}

export default Card