import styled from "styled-components"
import fotoyo from '../../assets/yoRecortada.png'

export const ContainerImg = styled.div`
  width: 400px;
  height: 100%;
  position:fixed;
  top:0;
  padding: 25px 0;
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  background-image: url(${fotoyo});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;
  
  @media (max-width: 500px) {
    width: 100%;
    height: 200px;
    position:static;
    padding: 15px 0 5px;
    justify-content: flex-end;
  }
`



export const MyName = styled.h2`
font-size: 36px;
padding: 0 5px;
margin-bottom: 20px;
color: #fff;

@media (max-width: 500px) {
  margin-bottom: 5px;
}
`
export const MyProfesion = styled.p`
padding: 0 5px;
color: #52ba85;
margin-bottom: 20px;

@media (max-width: 500px) {
  margin-bottom: 5px;
}
`
export const Redes = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`

export const Logo = styled.div`
cursor: pointer;
width: 30px;
height: 30px;  
margin: 0 10px 20px 0;
color: #fff;
transition: all 200ms ease-in-out;
@media (max-width: 500px) {
  margin: 5px;
  }

&:hover{
  color: #52ba85;
}
`