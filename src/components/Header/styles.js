import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_SEARCH};

  .profile-informations{

    width: 198px;
    height:68px;
    display: flex;
    align-items: center;
    gap: 9px;

    >div{
      
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      >span{
        color: ${({theme}) => theme.COLORS.GRAY_SEARCH};
      }
       
    }
    
    >img{
      width: 64px;
      height: 64px;
      border-radius: 50%; 
    }

  }

  .input{
    width:730px;
    height:53px;
  }

`;

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

