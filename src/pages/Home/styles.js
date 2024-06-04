import styled from "styled-components"

export const Container = styled.div`

  max-width:1366px ;
  align-items: center;
  justify-content: center;
  margin: 0 auto ;
 
`

export const Title = styled.div`
  display: flex ;
  align-items: center;
  justify-content: space-between;
  padding: 47px 123px 38px;

  >h1{
   font-size: 32px;
   font-weight: 400;
   color:${({theme}) => theme.COLORS.WHITE}
  }


  >Button{
     width: 207px;
  }

`
 export const Content = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 24px ;

  height: 710px;
  overflow-y: auto;
  
 `