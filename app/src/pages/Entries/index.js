import { Search } from '../../components/Search/Search';
import { SearchDetails } from '../../components/SearchDetails';
import { Container } from '../styles';

function Entries() {
  return (
    <Container>
      <Search />
      <SearchDetails />
    </Container>
  );
}

export { Entries };
