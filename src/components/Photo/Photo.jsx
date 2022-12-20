import {ContainerImg,MyName,MyProfesion,Redes ,Logo } from './photo.styles'
import FeatherIcon from 'feather-icons-react';

const Photo = () => {
  return(
    <ContainerImg>
        <MyName>Nicolas Rodriguez</MyName>
        <MyProfesion>Front End Developer</MyProfesion>
        <Redes>
          <Logo>
            <FeatherIcon icon="linkedin" />
          </Logo>
          <Logo>
            <FeatherIcon icon="github" />
          </Logo>
        </Redes>
      </ContainerImg>
  )
}

export default Photo