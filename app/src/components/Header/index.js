import { Link } from 'react-router-dom';

import { Container, Content, Navigation } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">HOME</Link>

        <Navigation>
          <ul>
            <li><Link to="/entradas">Entradas</Link></li>
            <li><Link to="/vencimentos">Vencimentos</Link></li>
            <li><Link to="/saidas">Saídas</Link></li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  );
}

export { Header };
