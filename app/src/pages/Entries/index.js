import { useEffect, useState } from 'react';
import { Search } from '../../components/Search';
import { SearchDetails } from '../../components/SearchDetails';
import { Container } from '../styles';

function Entries() {
  const [entries, setEntries] = useState([]);

  const baseAPI = 'http://localhost:3333/entries';

  useEffect(() => {
    fetch(baseAPI)
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
      <SearchDetails values={entries} />
    </Container>
  );
}

export { Entries };
