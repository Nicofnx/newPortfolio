import {Container, ContainerData, Texts, Buttoms, Buttom } from './cardPortfolio.styles'

const CardPortfolio = (props) => {

  const {img, tittle, description, demo, code} = props
  
  return(
    <Container
      img={img}>
      <ContainerData>
        <Texts>
          <h3>{tittle}</h3>
          <p>{description}</p>
        </Texts>
        <Buttoms>
          <a href={demo} target="_blank"> <Buttom isprimary={true}>Ver Demo</Buttom> </a>
          <a href={code} target="_blank"> <Buttom isprimary={false}>Ver Code</Buttom> </a> 
        </Buttoms>
      </ContainerData>

    </Container>
  )
}

export default CardPortfolio

