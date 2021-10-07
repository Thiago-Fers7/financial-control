import { useEffect, useState } from 'react';
import { Search } from '../../components/Search';
import { SearchDetails } from '../../components/SearchDetails';
import { Container } from '../styles';

function DueDate() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries([]);
  }, []);

  return (
    <Container>
      <Search />
      <SearchDetails values={entries} />
    </Container>
  );
}

export { DueDate };
