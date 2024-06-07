import styled from "styled-components"
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`

  height: 100vh;
  display: flex;
  align-items: stretch;

`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: center;

  padding: 235px 160px 307px 134px;

  >h1{
    font-size: 48px;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.SALMON}
  }

  >span{
    font-size: 14px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_SEARCH};

    margin-bottom: 48px;
  }
  

 >h2{
    font-size: 24px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.WHITE_TITLE};

   margin-bottom: 48px;
 }

 >button{
    padding: 16px 16px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 24px;
    margin-bottom: 42px;
 }

 >a{
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.SALMON};

    margin-left:128px;
 }

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`