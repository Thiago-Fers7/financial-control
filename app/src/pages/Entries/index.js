import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Add } from '../../components/Icons';
import { Search } from '../../components/Search';
import { SearchDetails } from '../../components/SearchDetails';
import { TransactionModal } from '../../components/TransactionModal';
import { getCurrentDateForUsageInQueryParamsAPI } from '../../utils/dateMethods';
import { Container } from '../styles';
import { NewTrasactionButton } from './styles';

function Entries() {
  const theme = useTheme();

  const [entries, setEntries] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  function setNewTransactions(newEntries) {
    setEntries(newEntries);
  }

  function handleModalActive(forced) {
    if (typeof forced === 'boolean') return setIsModalActive(forced);
    setIsModalActive(!isModalActive);
  }

  const baseURL = 'http://localhost:3333/entries';

  useEffect(() => {
    fetch(`${baseURL}?final_date=${getCurrentDateForUsageInQueryParamsAPI()}`)
      .then((res) => res.json())
      .then((data) => {
        setEntries(data);
      })
      .catch((err) => {
        if (err) alert('Erro ao buscar entradas!');
      });
  }, []);

  return (
    <Container>
      <Search />
      <NewTrasactionButton>
        <Button
          type="button"
          text={(
            <>
              <Add color={theme.variables.colors.entries} width="20px" />
              <span>Adicionar Entrada</span>
            </>
          )}
          onClick={handleModalActive}
        />
      </NewTrasactionButton>

      <SearchDetails values={entries} />

      <TransactionModal
        currentTransactions={entries}
        setNewTransactions={setNewTransactions}
        isModalActive={isModalActive}
        handleModalActive={handleModalActive}
        title="Adicionar nova entrada"
        baseURL={baseURL}
      />
    </Container>
  );
}

export { Entries };
