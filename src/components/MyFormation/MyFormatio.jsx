import {Container, Tittle, ConainerCertificadoCarrera,ContainerCerts, Certificado} from './myFormation'
import certificadoReact from '../../assets/Certificados/Certificado carrera front react.png'
import certificadoWeb from '../..//assets/Certificados/Certificado.png'
import certificadoJS from '../..//assets/Certificados/Certificado Js.png'
import certificadoReact2 from '../..//assets/Certificados/Certificado React.png'
import { useState } from 'react'

const certificados = {
  0: certificadoReact,
  1: certificadoWeb,
  2: certificadoJS,
  3: certificadoReact2
}



const MyFormation = () => {

  const [certShow, setCertShow] = useState(certificados[0])

  const handleCertSelected = (e) => {
    let targetId = e.target.id
    setCertShow(certificados[targetId])
    setTimeout(() => {
      setCertShow(certificados[0])
    }, 6000);
  }

  return(
    <Container id='formation'>
      <Tittle>my formation</Tittle>
      <ConainerCertificadoCarrera>
        <img id={0} src={certShow} onClick={handleCertSelected} alt="Certificado carrera React" />
      </ConainerCertificadoCarrera>
      <ContainerCerts>
        <Certificado >
          <img id={1} src={certificadoWeb} onClick={handleCertSelected} alt="Certificado desarrollo web" />
        </Certificado>
        <Certificado>
          <img id={2} src={certificadoJS} onClick={handleCertSelected} alt="Certificado JS" />
        </Certificado>
        <Certificado>
          <img id={3} src={certificadoReact2} onClick={handleCertSelected} alt="Certificado React" />
        </Certificado>
      </ContainerCerts>
    </Container>
  )
}

export default MyFormation