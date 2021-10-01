import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { DropDown } from '../Icons';
import { simpleDate } from '../../utils/dateMethods';

import { Container } from './styles';

function TableResume({ title, color, summaries }) {
  const { variables } = useTheme();

  return (
    <Container textColor={color}>
      <header>
        <h2>
          <span>{title}</span>
          <span className="expand">
            Expandir
            <DropDown rotate="270deg" color={variables.colors.commonText} />
          </span>
        </h2>

        <div>
          <span>Nome</span>
          <span>Valor</span>
          <span>Data</span>
        </div>
      </header>

      <section>
        {summaries.map((summarie) => (
          <div key={summarie.id}>
            <span>{summarie.name}</span>
            <span>{summarie.value}</span>
            <span>{simpleDate(summarie.due_date)}</span>
          </div>
        ))}
      </section>
    </Container>
  );
}

export { TableResume };

TableResume.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  summaries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};
