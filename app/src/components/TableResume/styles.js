import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header, section {
    & > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      
      background: var(--background-table);
      border-radius: var(--radius-button);

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        flex: 1;
        font-size: var(--commom-text);
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

    }
  }


`;
