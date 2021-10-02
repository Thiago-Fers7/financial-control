import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const TransactionResume = styled.section`
  overflow-x: hidden;

  @media (max-width: 359px) {
    overflow: auto;
  }

  &::-webkit-scrollbar {
    margin: 1rem 0;
    height: 0.5rem;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;    /* color of the scroll thumb */
    border-radius: 0.5rem;       /* roundness of the scroll thumb */
  }

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
  grid-template-areas: 
    'entrie nextEntries total'
    'exits nextExits total';

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
      grid-area: nextEntries;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.entries};
      }
    }
    &:nth-child(3) {
      grid-area: exits;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.exits};
      }
    }
    &:nth-child(4) {
      grid-area: nextExits;

      & > div > span:first-child {
        color: ${({ theme }) => theme.variables.colors.dueDate};
      }
    }

    &.totalDetails {
      grid-area: total;
      text-align: right;
      display: flex;

      justify-content: space-between;

      & > span {
        font-size: 2rem;
      }

      & > div {
        display: flex;
        flex-direction: column;
        
        text-align: right;

        & > span {
          width: 100%;

          &:nth-child(1) {
            color: ${({ theme }) => theme.variables.colors.entries};
          }

          &:nth-child(2) {
            position: relative;
            color: ${({ theme }) => theme.variables.colors.exits};

            &:before {
              content: '';
              position: absolute;
              bottom: 0;
              right: 0;
              background: black;
              height: 0.1rem;
              width: 50%;
            }
          }
        
          &:last-child {
            margin-top: 2rem;
            font-size: 2.2rem;
          }
        }
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
