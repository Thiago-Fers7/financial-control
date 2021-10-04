import styled from 'styled-components';

const Header = styled.header`
  position: relative;

  & > section, & > aside {
    padding: 2rem 0;

    form {
      fieldset {
        border: none;

        display: flex;

        input, select {
          padding: 0.3rem 0.6rem;
          border-radius: ${({ theme }) => theme.variables.others.radiusButton};
          border: 1px solid white;
        }
      }
    }
  }

  aside {
    position: absolute;
    width: min-content;
    right: -19.2rem;
    top: 0;
  }
`;

const SearchName = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;

    label {
      input {
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
`;

const SearchDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > label {
    & > span {
      font-size: 1.4rem;
    }

    & > select {
      width: 100%;
    }
  }
`;

export {
  Header, SearchName, SearchDate,
};
