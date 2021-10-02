import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  header {
    margin-bottom: 1rem;
    
    & > div {
      span {
        font-weight: 600;

        & + span {
          transform: ${({ isActive }) => isActive && 'translateX(-0.5rem)'};
        }
      }
    }

    h2 {
      color: ${({ textColor }) => textColor};
      display: flex;
      justify-content: space-between;
      align-items: center;

      span.expand {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        color: ${({ theme }) => theme.variables.colors.commonText};

        transition: 0.2s;

        &:hover {
          background: ${({ theme }) => theme.variables.colors.grayBackgroundHover};
        }

        border-radius: ${({ theme }) => theme.variables.others.radiusButton};

        padding: 0 1rem;

        font-size: 1.2rem;
        font-weight: 500;

        cursor: pointer;
        user-select: none;

        svg {
          width: 2.4rem;
          height: 2.4rem;
          
          transition: 0.5s;

          transform: ${({ isActive }) => (isActive ? 'rotate(90deg)' : 'rotate(270deg)')};
        }
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

  section {
    height: 11rem;
    overflow-y: hidden;
    scroll-behavior: smooth;

    transition: 0.4s;

    &::-webkit-scrollbar {
      margin: 1rem 0;
      width: 0.5rem;
      border-radius: ${({ theme }) => theme.variables.others.radiusButton};
    }

    &::-webkit-scrollbar-thumb {
      background-color: grey;      /* color of the scroll thumb */
      border-radius: ${({ theme }) => theme.variables.others.radiusButton};       /* roundness of the scroll thumb */
    }

    &.active {
      height: 20rem;
      overflow-y: auto;
    }

    & > div + div {
      margin-top: 0.5rem;
    }

    & > div {
      &.minus {
        ${({ theme, textColor }) => css`
          background: linear-gradient(to right, ${textColor} 1%, ${theme.variables.colors.nextDueDateBackground} 0%);
        `}
      }

      &:hover {
      filter: brightness(0.95);
    }
      span {
        font-size: ${({ theme }) => theme.variables.others.tableTextSize};
      }
    }
  }
`;
