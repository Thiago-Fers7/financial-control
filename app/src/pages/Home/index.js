import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { AlertIcon, CircleIndicatorIcon } from '../../components/Icons';
import { TableResume } from '../../components/TableResume';

import { convertToReal } from '../../utils/convertToMoney';
import { get30DaysAgo, getBigDate, getNext30Days } from '../../utils/dateMethods';

import {
  Container, TransactionResume, TransactionsDetailsResume, TransactionsValues,
} from './styles';

function Home() {
  const { variables } = useTheme();

  const [entries, setEntries] = useState([]);
  const [exits, setExits] = useState([]);

  let sumEntries = 0;
  let nextEntries = 0;
  entries.forEach((entrie) => {
    if (!getBigDate(entrie.due_date)) {
      sumEntries += entrie.value;
    } else {
      nextEntries += entrie.value;
    }
  });

  let sumExits = 0;
  let nextDueDate = 0;
  exits.forEach((exit) => {
    if (!getBigDate(exit.due_date)) {
      sumExits += exit.value;
    } else {
      nextDueDate += exit.value;
    }
  });

  const afterDate = getNext30Days();
  const beforeDate = get30DaysAgo();

  useEffect(() => {
    fetch(`http://localhost:3333/entries-and-exits?type_date=due_date&initial_date=${beforeDate}&final_date=${afterDate}`)
      .then((res) => res.json())
      .then((data) => {
        setEntries(data.entries);
        setExits(data.exits);
      })
      .catch((err) => {
        if (err) alert('Erro ao buscar dados!');
      });
  }, []);

  return (
    <Container>
      <TransactionResume>
        <TableResume title="Entradas" color={variables.colors.entries} summaries={entries} />
        <TableResume title="Saídas" color={variables.colors.exits} summaries={exits} />
      </TransactionResume>

      <TransactionsDetailsResume>
        <header>
          <h2>Detalhes das transações</h2>
          <strong>(30 dias)</strong>
        </header>

        <TransactionsValues>
          <div className="details">
            <div>
              <span>Entradas</span>
              <CircleIndicatorIcon rotate="180deg" colorIcon={variables.colors.entries} />
            </div>
            <span>{convertToReal(sumEntries)}</span>
          </div>

          <div className="details">
            <div>
              <span>Próximas Entradas</span>
              <AlertIcon colorIcon={variables.colors.entries} />
            </div>
            <span>{convertToReal(nextEntries)}</span>
          </div>

          <div className="details">
            <div>
              <span>Saídas</span>
              <CircleIndicatorIcon rotate="0" colorIcon={variables.colors.exits} />
            </div>
            <span>{convertToReal(sumExits)}</span>
          </div>

          <div className="details">
            <div>
              <span>Próximas Saídas</span>
              <AlertIcon colorIcon={variables.colors.dueDate} />
            </div>
            <span>{convertToReal(nextDueDate)}</span>
          </div>

          <div className="totalDetails">
            <span>Saldo Total</span>
            <div>
              <span>{convertToReal(sumEntries)}</span>
              <span>
                -
                {' '}
                {convertToReal(sumExits)}
              </span>
              <span>{convertToReal(sumEntries - sumExits)}</span>
            </div>
          </div>
        </TransactionsValues>
      </TransactionsDetailsResume>
    </Container>
  );
}

export { Home };
