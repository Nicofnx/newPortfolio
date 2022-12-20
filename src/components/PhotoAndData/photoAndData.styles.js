import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row;
  padding-left: 60px;
  
  @media (max-width: 500px) {
    flex-direction: column;
    padding-left: 45px;
  }
`




