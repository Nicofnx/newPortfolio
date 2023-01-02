import styled from 'styled-components'


export const Container = styled.div`
background: #1c1b1e;
width: 60px;
height:calc(100vh - 70px);
position: fixed;
top: 35px;
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
z-index: 200;
transition: all 200ms ease-in;

${({isOpen})=> !isOpen
    ? `width: 60px;`
    : `width: 200px;`
  }

@media (max-width: 500px) {
  position: fixed;
  top: 0;
  transition: all 200ms ease-in;

  ${({isOpen})=> !isOpen
    ? `width: 40px;`
    : `width: 200px;`
  }
  
  height:100%;
  }
`
export const ContainerButton = styled.div`
  height: 100%;

  
`
export const ButtonBurger = styled.div`
background-color: #52ba85;
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 500px) {
  width: 40px;
  height: 40px;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: left;
  
  
  }
`

export const ContainerIcons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #fff;
  overflow: hidden;
`

export const ContainerCV = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #fff;
`

export const SpanMenu = styled.span`
  font-size: 14px;
  padding: 0 10px;
  transition: all 200ms ease-in;


  ${({isOpen})=> !isOpen
      ? `display: none`
      : `display: block`
  }
`

export const Logo = styled.div`
  padding: 2px;
  margin: 8px 5px;
  
  

  a{
    cursor:pointer;
    color: #fff;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: nowrap;

    
  }

  a:hover{
    color: #52ba85;
  }
`


  