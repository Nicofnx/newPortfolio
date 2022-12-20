import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 20px 0 0 ;
  border-bottom: 1px solid #444;

  @media (max-width: 500px) {
    margin: 40px 0px;
  }
  
`

export const Tittle = styled.h2`
  color: #fff;
`
export const ContainerServices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px 10px 20px 0;
  
  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-auto-flow: auto;
  }

  @media (max-width: 500px) {
    margin: 40px 0px 20px 0;
  }

`