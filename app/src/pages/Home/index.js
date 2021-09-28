import { TableResume } from '../../components/TableResume';

import { Container, Resume } from './styles';

function Home() {
  return (
    <Container>
      <Resume>
        <TableResume title="Entradas" />
        <TableResume title="Saídas" />
      </Resume>
    </Container>
  );
}

export { Home };
