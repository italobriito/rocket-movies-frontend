import styled from "styled-components"

export const Container =styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;

  color: ${({theme}) => theme.COLORS.SALMON};
  background: transparent;


  svg{
    width: 16px;
    height: 16px;
  }
  


`