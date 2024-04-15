import styled from "styled-components"

export const Container =styled.div`
  width: 100%;
  
  
 .content{
    width:1137px ;
    margin: 43px auto;

    >h1{
     font-weight: 500;
    }

  }


  .title-movie{
    display: flex;
    align-items: center;
    gap: 19px ;
    margin-top: 24px;

    >ul{
      display: flex;
     list-style-type: none;
     gap: 10px;
    }

   svg{
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.SALMON}; 
    }

  }
  
  
  .profile-information{
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 40px;

    img{
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    svg{
      color: ${({theme}) => theme.COLORS.SALMON};
    } 

  }

  .tags{

    span{
      background-color: ${({theme}) => theme.COLORS.LIGHT_SALMON};
    }
    
    margin-bottom: 40px;  
  }

  p{
    text-align: justify;
    margin-bottom: 28px;  
  }

`