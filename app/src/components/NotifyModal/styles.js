import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 7.5rem;
  right: -100%;

  display: grid;
  place-items: center;
  
  width: 25rem;
  height: 9rem;

  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 1rem;

  background: white;

  ${({ status }) => (status ? css`
    right: 5vw;
  ` : css`
    right: 5vw;
    animation: showMessage 4s forwards;
  `)}

  @keyframes showMessage {
    75% {
      right: 5vw;
    }

    100% {
      right: -100%;
    }
  }

  span {
    text-align: center;
    position: relative;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.variables.colors.entries};
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

export const ShowMessage = styled.span`
  opacity: 0;
  animation: show 1s forwards;

  @keyframes show {
    to {
      opacity: 1;
    }
  }
`;
