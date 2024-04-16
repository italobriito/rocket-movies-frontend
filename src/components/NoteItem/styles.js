import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_SEARCH};

  color: ${({ theme }) => theme.COLORS.GRAY_SEARCH};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_SEARCH}` : "none"};

  > button { 
    width:113px;
    gap:16px;
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

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`