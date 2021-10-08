import styled from 'styled-components';

export const NewTrasactionButton = styled.div`
  margin: 2rem 0 1rem 0;

  button {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    
    color: ${({ theme }) => theme.variables.colors.entries};
    font-size: 1.5rem;
    border: none;
    
    background: transparent;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
