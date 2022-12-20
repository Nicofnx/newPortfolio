import styled from "styled-components";


export const Container = styled.div`
  width: fill-content;
  min-height: 195px;
  border: 1px solid #52ba85;
  margin: 40px 20px;
  padding: 10px;
  border-radius: 10px;
  background-image: url(${({img})=>img});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 1200px;
  background-position:  right;
  position: relative;
  display: flex;
  align-items: center;
  
  @media (max-width: 500px) {
    margin: 40px 10px;
  }
  
  &::before{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 10px;
    background-color: rgba(0,0,0, 1);
    filter: saturate(50%) opacity(80%) blur(1px);
  }

  

  
`

export const ContainerData = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Texts = styled.div`
  width: 60%;
  height: 100%;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
  }

  h3{
    position: relative;
    color: #fff;
    padding: 10px 0;
  }

  p{
    position: relative;
    color: #fff;
    padding: 10px 0;
    color: #b9b9b9;
    font-size: 16px;

    @media (max-width: 500px) {
      font-size: 14px
    }
  }

`
export const Buttoms = styled.div`
  width: 40%  ;
  height: 100%;
  position: relative;
  display: flex;
  justify-content:space-around;
  align-items:center;
  

  
`

export const Buttom = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  background-color: #52ba85;
  cursor: pointer;
  margin: 0 10px;
  

  @media (max-width: 500px) {
      font-size: 14px;
      padding: 10px 40px;
    }

  ${({isprimary})=>!isprimary && `
    background-color: transparent;
    border: 1px solid #52ba85;
    color: #fff;
  `}
  
`