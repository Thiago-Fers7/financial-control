import styled, { css } from 'styled-components';

const Loader = styled.div`
  ${({ theme }) => css`
    border: 0.5rem solid ${theme.variables.colors.loadColor1};
    border-top-color: ${theme.variables.colors.loadColor2};
    border-bottom-color: ${theme.variables.colors.loadColor2};
  `}

  border-radius: 50%;
  width: 4rem;
  height: 4rem;

  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }
`;

function LoadAnimation() {
  return <Loader />;
}

export { LoadAnimation };
