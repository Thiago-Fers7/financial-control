import PropTypes from 'prop-types';

import { Container } from './styles';

function TableResume({ title, color }) {
  return (
    <Container textColor={color}>
      <header>
        <h2>{title}</h2>

        <div>
          <span>Nome</span>
          <span>Valor</span>
          <span>Data</span>
        </div>
      </header>

      <section>
        <div>
          <span>Salário</span>
          <span>R$ 1.000.500,00</span>
          <span>15/09/2021</span>
        </div>
      </section>
    </Container>
  );
}

export { TableResume };

TableResume.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
