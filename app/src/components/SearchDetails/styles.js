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
  background: white;
  line-height: 4rem;
  
  & > span {
    padding: 0 1rem;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
    
    &:nth-child(1) {
      width: 20rem;
    }
    
    &:nth-child(2) {
      width: 30rem;
    }
    
    &:nth-child(3) {
      min-width: 17rem;
    }
    
    &:nth-child(4) {
      min-width: 13.2rem;
      text-align: center;
    }
    
    &:nth-child(5), &:nth-child(6) {
      width: 11.61rem;
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

  &:hover {
    filter: brightness(0.95);
  }

  span {
    font-size: 1.5rem;
    font-weight: normal;
    
    &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3) {
      min-height: 2.4rem;
      
      & > svg {
        transform: translateY(31%);

        cursor: pointer;
        height: 2.4rem;
        width: 2.4rem;
      }
    }
  }
`;
