import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 20px 40px 0 ;
  border-bottom: 1px solid #444;

  @media (max-width: 500px) {
    margin: 40px 0px 20px 0;
  }
`

export const Tittle = styled.h2`
  color: #fff;
  margin: 20px 0;
`

export const ConainerCertificadoCarrera = styled.div`
  width: 100%;
  margin: 40px 0;
  cursor: pointer;
 
  img{
    width: 100%
  }

`

export const ContainerCerts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 40px;
`

export const Certificado = styled.div`
  width: 100%;
  margin: 0 5px;
  cursor: pointer;

  img{
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: all 200ms ease-in;

    &:hover{
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }
    
  }
`