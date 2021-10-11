import { css } from 'styled-components';

const tableScrollY = css`
  &::-webkit-scrollbar {
    margin: 1rem 0;
    width: 0.5rem;
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;      /* color of the scroll thumb */
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};       /* roundness of the scroll thumb */
  }
`;

const tableScrollX = css`
  &::-webkit-scrollbar {
    margin: 1rem 0;
    height: 0.5rem;
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;      /* color of the scroll thumb */
    border-radius: ${({ theme }) => theme.variables.others.radiusButton};       /* roundness of the scroll thumb */
  }
`;

const srOnly = css`
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const theme = {
  variables: {
    colors: {
      grayVeryLight: '#e8e8f0',
      grayBackgroundHover: '#d7d7d7',
      hoverLinkBackground: '#e2e2e2',
      commonText: '#393939',
      backgroundHeader: '#fff',
      backgroundTable: '#fff',
      greenTitle: '#1a9f37',
      entries: '#1a9f37',
      greenLight: '#64ff86',
      dueDate: '#ff6b00',
      nextDueDateBackground: '#ffde8266',
      exits: '#ff0000',
      loadColor1: '#c2c2c2',
      loadColor2: '#2c1c83',
      redTitle: '#ff5a5a',
      inputErrorMessage: '#f00',
      backgroundCancelButton: '#ff8181',
      colorCancelButton: '#6a0000',
      colorAddButton: '#1c7100',
      colorButton: '#2c1c83',
      backgroundDetailsTransactionHome: '#fff',
      borderColor: '#00000040',
      modalContainerBackground: '#00000040',
    },
    others: {
      radiusButton: '0.4rem',
      commomTextSize: '1.6rem',
      tableTextSize: '1.5rem',
    },
  },
  styles: {
    tableScrollY,
    tableScrollX,
    srOnly,
  },
};

export { theme };
