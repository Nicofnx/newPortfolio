import Card from '../Card/Card'
import {Container, Tittle, ContainerServices } from './myServices.styles'


const MyServices = () => {
  return(
    <Container id='service'>
      <Tittle>my services</Tittle>
      <ContainerServices>
        <Card
          logo = {'monitor'}
          tittle = {'Front End'}
          description = {'Desarrollo de aplicaciones Web y mobiles. Construcciones de sitios acorde a lo solicitado por el cliente.'}
        />
        <Card
          logo = {'award'}
          tittle = {'Optimizacion de SEO'}
          description = {'Auditoria de tu sitio web para la busqueda de una mejora en el posicionamiento de los motores de busqueda.'}
        />
        <Card
          logo = {'key'}
          tittle = {'Data Base'}
          description = {'Instalacion y configuacion de certificado SSL en tu sitio. Redireccion y configuraciones de tu sitio web o hosting.'}
        />
        <Card
          logo = {'eye'}
          tittle = {'Responsibe'}
          description = {'Diseno adaptable a distintos dispositivos para que tu web sea visible de manera optima en todo tipo de resolucion.'}
        />
      </ContainerServices>
    </Container>
  )
}

export default MyServices