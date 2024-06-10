import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  width: 1121px;
  height: 222px ;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_SALMON};

  margin: 0 auto;
  align-items: center;
  justify-content: center;

 >ul{
  display: flex;
  list-style-type: none;
  gap: 2px;
  
  svg{
    width: 12px;
    height: 12px;
    color: ${({theme}) => theme.COLORS.SALMON};  
  }
 }
 
  >h1{
    font-size: 24px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.WHITE_TITLE};  
  }


  >p{
    width: 1057px;
    height: 42px ;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT};
    text-align: justify;

    margin-top: 8px;
    margin-bottom: 32px;
    
    overflow-y: hidden;
    text-overflow: ellipsis;
  }

 
 

  
  

`