import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

function Button({ text, type }) {
  return (
    <ContainerButton type={type}>
      {text}
    </ContainerButton>

  );
}

export { Button };

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
