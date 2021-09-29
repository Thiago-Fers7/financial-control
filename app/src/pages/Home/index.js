import { TableResume } from '../../components/TableResume';

import { Container, Resume } from './styles';

function Home() {
  return (
    <Container>
      <Resume>
        <TableResume title="Entradas" color="green" />
        <TableResume title="Saídas" color="red" />
      </Resume>
    </Container>
  );
}

export { Home };
