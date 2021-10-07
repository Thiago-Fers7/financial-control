import { Search } from '../../components/Search/Search';
import { SearchDetails } from '../../components/SearchDetails';
import { Container } from '../styles';

function DueDate() {
  return (
    <Container>
      <Search />
      <SearchDetails />
    </Container>
  );
}

export { DueDate };
