import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

function Button({
  text, type, onClick,
}) {
  return (
    <ContainerButton onClick={onClick} type={type}>
      {text}
    </ContainerButton>
  );
}

export { Button };

Button.propTypes = {
  text: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => { },
};
