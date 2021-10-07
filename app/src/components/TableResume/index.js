import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import { DropDown } from '../Icons';

import { simpleDate, getBigDate } from '../../utils/dateMethods';
import { convertToReal } from '../../utils/convertToMoney';

import { Container } from './styles';

function TableResume({ title, color, summaries }) {
  const { variables } = useTheme();

  const [isActive, setIsActive] = useState(false);

  const summarieRef = useRef(null);

  function handleActive() {
    setIsActive(!isActive);

    summarieRef.current.scroll(0, 0);
  }

  return (
    <Container textColor={color} isActive={isActive}>
      <header>
        <h2>
          <span>{title}</span>
          <span className="expand" onClick={handleActive}>
            {isActive ? 'Recolher' : 'Expandir'}
            <DropDown isActive={isActive} color={variables.colors.commonText} />
          </span>
        </h2>

        <div>
          <span>Nome</span>
          <span>Valor</span>
          <span>Data</span>
        </div>
      </header>

      <section ref={summarieRef} className={isActive ? 'active' : ''}>
        {summaries.map((summarie) => (
          <div key={summarie.id} className={getBigDate(summarie.due_date) ? 'minus' : ''}>
            <span>{summarie.name}</span>
            <span>{convertToReal(summarie.value)}</span>
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
    due_date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};
