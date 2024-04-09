import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 64px;
  
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_SEARCH};

  >h1{
   font-weight: bold;
   font-size: 24px;
   color: ${({theme}) => theme.COLORS.SALMON};
  }

  .profile-informations{
    display: flex;
    align-items: center;
    gap: 9px;

    >div{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    
    >img{
      width: 64px;
      height: 64px;
      border-radius: 50%; 
    }

  }

  .input{
    width:630px
  }

`;

