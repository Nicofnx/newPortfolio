import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height:calc(100vh - 70px);
  overflow: auto;
  background: #1c1b1e;
  &::-webkit-scrollbar {
        width: 12px;
        border: 1px solid #444;
        border-radius: 10px;
        
    }
  &::-webkit-scrollbar-thumb {
  background: #52ba85;
  border-radius: 10px
}
`
export const ContainerData = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 30px 0px 0px 420px;

  @media (max-width: 500px) {
    padding: 10px;
  }

  
`

export const Tittle = styled.h1`
  font-size: 48px;
  color: #fff;
  margin: 0 0 30px;
  line-height: 50px;

  @media (max-width: 500px) {
    font-size: 38px;
    margin: 0 0 20px;
  }
`

export const InfoMe = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #52ba85;
  letter-spacing: 7px;

  @media (max-width: 500px) {
    text-align: center
  }
`

export const MyDescription = styled.p`
  font-size: 16px;
  margin: 15px 20px 15px 0;
  padding: 10px 20px 40px 0px;
  color: #b9b9b9;
  
  border-bottom: 1px solid #444;

  @media (max-width: 500px) {
    font-size: 14px;
    margin: 5px;
    padding: 5px;
    line-height: 27px;
  }
`

export const ContainerSkills = styled.div`
  display:flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0 0 0;

  ul{
    li{
      list-style-type:circle;
      list-style-position: outside;
      color: #52ba85;
      
      span{
        color: #b9b9b9;
      }
    }
  }
`