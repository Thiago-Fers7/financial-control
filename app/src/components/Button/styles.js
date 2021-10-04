import styled from 'styled-components';

const ContainerButton = styled.button`
  border: 1px solid black;
  background: ${({ theme }) => theme.variables.colors.grayVeryLight};
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.variables.colors.colorButton};
  border-color: ${({ theme }) => theme.variables.colors.borderColor};
  font-weight: 600;

  border-radius: ${({ theme }) => theme.variables.others.radiusButton};

  transition: 0.2s;
  user-select: none;

  &:hover {
    filter: brightness(0.9);
  }
`;

export { ContainerButton };
