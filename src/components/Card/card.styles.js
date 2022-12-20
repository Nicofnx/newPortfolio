import styled from "styled-components";


export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px 10px 0;
`

export const Logo = styled.span`
  color: #52ba85;
`
export const Tittle = styled.h4`
  color: #fff;
  font-size: 18px;
  margin: 7px 0;
`
export const Description = styled.p`
  font-size: 14px;
  text-align: left ;
  
  color: #b9b9b9;
  
  
`

export const ImgProyect = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 200ms ease-in;
  margin-top: 10px;
  border-radius: 5px;

  &:hover{
    -webkit-filter: grayscale(0);
  filter: grayscale(0);
  }
`