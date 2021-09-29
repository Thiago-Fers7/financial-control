import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
    h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span.expand {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        color: ${({ theme }) => theme.variables.colors.commonText};
        font-size: 1.2rem;
        font-weight: 500;

        cursor: pointer;
        user-select: none;
      }
    }
  }

  header, section {
    & > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      
      background: ${({ theme }) => theme.variables.colors.backgroundTable};
      border-radius: ${({ theme }) => theme.variables.others.radiusButton};

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        flex: 1;
        font-size: ${({ theme }) => theme.variables.others.commomTextSize};
        padding: 0.5rem 1rem;

        &:first-child {
          max-width: 21.59rem;
        }

        &:last-child {
          flex: none;
          width: 10.41rem;
        }

        &:nth-child(2) {
          flex: none;
          width: 15rem;
        }
      }
    }
  }

  header {
    h2 {
      color: ${({ textColor }) => textColor};
    }

    & > div {
      span {
        font-weight: 600;
      }
    }
  }

  section {
    & > div {
      margin-top: 0.5rem;

      span {
        font-size: ${({ theme }) => theme.variables.others.tableTextSize};
      }
    }
  }
`;
