import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const TransactionResume = styled.section`
  overflow-x: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding: 2rem 0;
  
  @media (max-width: 900px) {
    grid: none;
  } 
`;

export const TransactionsDetailsResume = styled.section`
  padding: 1rem 0;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    strong {
      transform: translateY(0.1rem);
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`;

export const TransactionsValues = styled.section`
  margin-top: 2rem;
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'entrie dueDate exits'
  'total total  total';
  gap: 2rem;

  @media (max-width: 600px) {
    grid: none;
    display: flex;
    flex-direction: column;
  }

  & > div {
    &:nth-child(1) {
      grid-area: entrie;
      
      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.entries};
      }
    }
    &:nth-child(2) {
      grid-area: dueDate;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.dueDate};
      }
    }
    &:nth-child(3) {
      grid-area: exits;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.exits};
      }
    }
    &:nth-child(4) {
      grid-area: total;
      width: 100%;
      text-align: right;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.entries};
      }
    }

    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    padding: 0.5rem;
    
    ${({ theme }) => css`
      background: ${theme.variables.colors.backgroundDetailsTransactionHome};
      border-radius: ${theme.variables.others.radiusButton};
    `}

    @media (max-width: 600px) {
      padding-right: 2rem;
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        height: 2rem;
      }
    }

    & > div span, & > span {
        font-size: 1.5rem;
        font-weight: 600;
        opacity: 0.8;
    }

    & > span {
      &:last-child {
        align-self: flex-end;

        font-weight: 500;
        font-size: 2rem;
      }
    }
  }
`;
