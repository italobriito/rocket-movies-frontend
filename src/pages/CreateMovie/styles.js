import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;

`

export const Content = styled.div`
  width:1137px ;
  margin: 43px auto;

  .link{
    display: flex;
    align-items: center;
    gap: 8px;
    
    color: ${({theme}) => theme.COLORS.SALMON};
    
   svg{
      width: 16px;
      height: 16px;
   }
  
  }

`

export const MovieInformations = styled.section`

  h1{
    font-size: 36px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.WHITE_TITLE};

    margin-top: 24px;
    margin-bottom: 40px;
  }

`

export const Inputs = styled.div`

  display: flex;
  gap: 40px;
  margin-bottom: 40px;
    
`

export const Markers = styled.section`

  h2{
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_TEXT};

    margin-bottom: 24px;
  }

  .markers{
    display: flex;
    padding: 16px;
    gap:24px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.BLACK};

    
  }


`
export const ActionButtons = styled.div`

  display: flex;
  gap: 40px;

  margin-top: 40px;

  .delete{
    background-color: ${({theme}) => theme.COLORS.BLACK} ;
    color: ${({theme}) => theme.COLORS.SALMON};
  }
  
  .save{
    color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
  }

`