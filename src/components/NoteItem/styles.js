import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_SEARCH};

  color: ${({ theme }) => theme.COLORS.GRAY_SEARCH};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_SEARCH}` : "none"};

  > button {  
    
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.SALMON};
    
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > input {
    
    height: 56px; 
    padding:12px;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`