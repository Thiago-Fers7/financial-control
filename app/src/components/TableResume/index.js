import PropTypes from 'prop-types';

function TableResume({ title }) {
  return (
    <div>
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
          <span>R$ 1.500,00</span>
          <span>15/09/2021</span>
        </div>
      </section>
    </div>
  );
}

export { TableResume };

TableResume.propTypes = {
  title: PropTypes.string.isRequired,
};
