import styled from 'styled-components';

const Header = styled.header`
  position: relative;

  & > section, & > aside {
    padding: 2rem 0;

    form {
      fieldset {
        border: none;
        display: flex;

        legend {
          ${({ theme }) => theme.styles.srOnly}
        }

        input, select {
          padding: 0.3rem 0.6rem;
          height: 3.6rem;
          border-radius: ${({ theme }) => theme.variables.others.radiusButton};
          border: 1px solid white;
        }
      }
    }

  }

  & > aside {
    position: absolute;
    width: min-content;
    right: -25.2rem;
    top: 6.5rem;

    @media (max-width: 1530px) {
      position: sticky;
      width: 100%;
      padding: 0;
    }

    & > div {
      display: none;
    }
    
    @media (max-width: 631px) {
      & > div {
        margin-top: 0.8rem;
        display: block;
        border-radius: ${({ theme }) => theme.variables.others.radiusButton};
        cursor: pointer;
        user-select: none;
        font-size: 1.7rem;
        transition: 0.2s;

        &:hover {
          background: ${({ theme }) => theme.variables.colors.grayBackgroundHover};
        }

        & > span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          padding: 0.2rem 0;

          span {
            height: 24px;
            transform: rotate(270deg);
            transition: 0.5s;
          }

          &.expand {
            border-radius: ${({ theme }) => theme.variables.others.radiusButton};
            background: ${({ theme }) => theme.variables.colors.grayBackgroundHover};

            span {
              transform: rotate(90deg);
            }
          }
        }
      }
      
      & > form {
        width: 100%;
        max-height: 0;
        transition: 0.5s;
        overflow: hidden;
        
        &.active {
          margin-top: 2.8rem;  
          max-height: 40rem;
          transition: 0.5s;
        }
      }
    }
  }
`;

const SearchName = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;

  label {
    flex: 1;
    max-width: 40rem;
    min-width: 17rem;

    input {
      &[type="search"]::-webkit-search-cancel-button {
        cursor: pointer;
      }
      
      background: transparent;
      padding-left: 0.3rem !important;
      border: none !important;
      border-radius: 0 !important;
      border-bottom: 1px solid ${({ theme }) => theme.variables.colors.borderColor} !important;
      outline: none;

      &:focus, &.isActive {
        border-bottom: 2px solid ${({ theme }) => theme.variables.colors.colorButton} !important;

        ~ span {
          color: ${({ theme }) => theme.variables.colors.colorButton};
          top: -2.3rem;
          left: 0;
          padding: unset;
          opacity: 1;
          font-size: 1.4rem;
        }
      }
    }

    span {
      transition: 0.2s;
      display: block;
      top: 0;
      position: absolute;
      padding: 0.3rem 0.6rem;
      font-size: 1.7rem;
      opacity: 0.6;
    }
  }
  
  input {
    width: 40rem;
    font-size: 1.7rem;
  }

  @media (max-width: 631px) {
    width: 100%;

    label {
      max-width: none;

      input {
        width: 100%;
      }
    }
  }
`;

const SearchDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > label {
    & > span {
      font-size: 1.4rem;
    }

    & > input, & > select {
      background: white;
    }

    & > select {
      width: 100%;
    }
  }

  @media (max-width: 1530px) {
    flex-direction: row;

    label {
      width: max-content;

      span {
        display: block;
      }

      select {
        border: none;
      }
    }

    button {
      align-self: end;
      height: 3.6rem;
    }
  }

  @media (max-width: 631px) {
    display: block;
    width: 100%;

    label {
      width: 100%;

      input {
        width: 100%;
        margin-bottom: 2rem;
      }

      select {
        border: none;
        margin-bottom: 2rem;
      }
    }

    button {
      width: 100%;
      height: 3.6rem;
    }
  }
`;

export {
  Header, SearchName, SearchDate,
};
