import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
  width: 100%;
  
  h2{ 
    align-self: flex-start;
    color: #fff
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 5px;
      padding: 5px;

      label {
        align-self: flex-start;
        margin: 5px 0;
      }

      input{ 
        width: 100%;
        padding: 7px;
        background-color: rgb(47, 47, 47);
        color: #ddd;
        font-size: 16px;
        border: 1px solid #52ba85;

        
      }
      input:focus{
        color: #52ba85;
        outline: none;
        border: 1px solid #ddd;
        
      }

      p{
        color: #FF5733
      }

      textarea{
        width: 100%;
        padding: 7px;
        background-color: rgb(47, 47, 47);
        color: #ddd;
        font-size: 16px;
        border: 1px solid #52ba85;
      }

      textarea:focus{
        color: #52ba85;
        outline: none;
        border: 1px solid #ddd;
      }

      
    }
    p{
      text-align: center;
      span{
        color: #52ba85;
      }
    }
  }
`
export const BtnSubmit = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  background-color: #52ba85;
  cursor: pointer;
  margin: 10px 10px;
`