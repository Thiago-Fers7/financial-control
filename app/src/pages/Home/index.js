import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { AlertIcon, CircleIndicatorIcon } from '../../components/Icons';
import { TableResume } from '../../components/TableResume';

import {
  Container, TransactionResume, TransactionsDetailsResume, TransactionsValues,
} from './styles';

function Home() {
  const { variables } = useTheme();

  return (
    <Container>
      <TransactionResume>
        <TableResume title="Entradas" color={variables.colors.entries} />
        <TableResume title="Saídas" color={variables.colors.exits} />
      </TransactionResume>

      <TransactionsDetailsResume>
        <header>
          <h2>Detalhes das transções</h2>
          <strong>(últimos 30 dias)</strong>
        </header>

        <TransactionsValues>
          <div className="details">
            <div>
              <span>Entrada</span>
              <CircleIndicatorIcon rotate="180deg" colorIcon={variables.colors.entries} />
            </div>
            <span>150</span>
          </div>

          <div className="details">
            <div>
              <span>Vencimentos próximos</span>
              <AlertIcon colorIcon={variables.colors.dueDate} />
            </div>
            <span>150</span>
          </div>

          <div className="details">
            <div>
              <span>Saídas</span>
              <CircleIndicatorIcon rotate="0" colorIcon={variables.colors.exits} />
            </div>
            <span>150</span>
          </div>

          <div className="totalDetails">
            <span>Saldo Total</span>
            <span>150</span>
          </div>
        </TransactionsValues>
      </TransactionsDetailsResume>
    </Container>
  );
}

export { Home };
