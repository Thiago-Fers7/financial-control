import styled, { css } from 'styled-components';

const scrollStyles = css`
  ${({ theme }) => css`
    ${theme.styles.tableScrollX}
    ${theme.styles.tableScrollY}
  `}
`;

export const Table = styled.section`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  ${scrollStyles}
`;

export const TableHeader = styled.div`
  display: flex;
  
  min-width: 71.5rem;
  
  border-radius: ${({ theme }) => theme.variables.others.radiusButton};
  box-shadow: 0 0 2px #c2c2c2;
  background: white;
  
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

  & > span {
    font-size: 1.7rem;
    font-weight: 500;
  }
`;

export const TableContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  min-width: 71.5rem;

  margin: 1rem 0;

  ${scrollStyles}
`;

export const TableBody = styled.div`
  min-height: 20rem;
  max-height: 40vh;
`;

export const TableRow = styled(TableHeader)`
  margin-top: 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;
