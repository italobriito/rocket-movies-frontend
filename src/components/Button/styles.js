import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  background-color: ${({theme})=> theme.COLORS.SALMON};

  padding: 0px 32px ;
  gap:8px;


  border: none;
  border-radius: 8px ;

  svg{
    width: 16px;
    height: 16px;
  }


 

`