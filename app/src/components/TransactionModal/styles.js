import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  ${({ isActive }) => isActive && css`
      opacity: 1;
      visibility: visible;
  `} 

  background: ${({ theme }) => theme.variables.colors.modalContainerBackground};

  display: grid;
  place-items: center;
`;

export const Modal = styled.div` 
  background: white;
  width: 100%;
  max-width: 40rem;

  padding: 2rem;
  border-radius: ${({ theme }) => theme.variables.others.radiusButton};

  font-size: 1.6rem;
`;

export const Form = styled.form` 
  fieldset {
    border: none;

    legend {
      ${({ theme }) => theme.styles.srOnly}
    }
  }
`;

export const Inputs = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 0;
`;

export const InputField = styled.div` 
  display: flex;
  flex-direction: column;

  span { 
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.variables.colors.borderColor};
    outline-color: ${({ theme }) => theme.variables.colors.borderColor};
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};
    background: white;

    font-size: 1.5rem;
  }

  strong {
    font-size: 1.3rem;
    font-weight: normal;
    color: ${({ theme }) => theme.variables.colors.inputErrorMessage};

    animation: alert 0.3s 1 reverse; 

    @keyframes alert {
      0% {
        transform: translateX(-1rem);
      }

      25% {
        transform: translateX(1rem)
      }

      50% {
        transform: translateX(-1rem)
      }

      75% {
        transform: translateX(1rem)
      }

      100% {
        transform: translateX(0)
      }
    }
  }
`;

export const Buttons = styled.div` 
  display: flex;
  gap: 2rem;

  button {
    flex: 1;
    padding: 1rem;
    text-transform: uppercase;
    
    &[type="button"] {
      background: ${({ theme }) => theme.variables.colors.backgroundCancelButton};
      color: ${({ theme }) => theme.variables.colors.colorCancelButton};
    }

    &[type="submit"] {
      background: ${({ theme }) => theme.variables.colors.greenLight};
      color: ${({ theme }) => theme.variables.colors.colorAddButton};
    }
  }
`;
