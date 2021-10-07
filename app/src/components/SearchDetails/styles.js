import styled, { css } from 'styled-components';

export const Table = styled.section`
  width: 100%;
  overflow: auto;

  ${({ theme }) => css`
    ${theme.styles.tableScrollX}
    ${theme.styles.tableScrollY}
  `}

  & > div {
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};
    background: white;
    display: flex;
    min-width: 71.5rem;
    
    & > span {
      padding: 0.5rem 1rem;
      
      white-space: nowrap;
      
      &:nth-child(1) {
        min-width: 20rem;
      }
      
      &:nth-child(2) {
        flex: 1;
      }
      
      &:nth-child(3) {
        min-width: 12.78rem;
      }
      
      &:nth-child(4) {
        min-width: 12.2rem;
      }
      
      &:nth-child(5), &:nth-child(6) {
        min-width: 9.61rem;
        text-align: center;
      }
      
      @media (max-width: 800px) {
        
        &:nth-child(1) {
          min-width: 12rem;
        }
        
        &:nth-child(2) {
          min-width: 15rem;
        }
      }
    }
  }
`;

export const TableHeader = styled.div`
  margin-top: 3rem;
  box-shadow: 0 0 2px #c2c2c2;

  & > span {
    font-size: 1.7rem;
  }
`;

export const TableBody = styled.div`
  margin: 1rem 0;

  & > span {
    font-size: 1.5rem;
  }
`;
