import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_SEARCH};

  

  .input{
    width:730px;
    height:53px;
  }

`;

export const Profile = styled(Link)`

  width: 198px;
  height:68px;
  display: flex;
  align-items: center;
  gap: 9px;

  >div{
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    >p{
      color: ${({theme}) => theme.COLORS.WHITE_TITLE}
    }

    >span{
      color: ${({theme}) => theme.COLORS.GRAY_SEARCH};
    }
    
  }

  >img{
    width: 64px;
    height: 64px;
    border-radius: 50%; 
  }



`

export const Content = styled.div`
  display: flex;
  width: 1173px;
  align-items: center;
  justify-content: center;
  gap: 64px;
  
  
  
  >h1{

   font-weight: 700;
   font-size: 24px;
   color: ${({theme}) => theme.COLORS.SALMON};
   
  }

  
`

