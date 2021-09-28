import { Link, useLocation } from 'react-router-dom';

import { Container, Content, Navigation } from './styles';

function Header() {
  const { pathname } = useLocation();

  function handleRouteActive(path) {
    if (pathname === path) return 'active';
    return '';
  }

  return (
    <Container>
      <Content>
        <Link to="/">HOME</Link>

        <Navigation>
          <ul>
            <li><Link to="/entradas" className={handleRouteActive('/entradas')}>Entradas</Link></li>
            <li><Link to="/vencimentos" className={handleRouteActive('/vencimentos')}>Vencimentos</Link></li>
            <li><Link to="/saidas" className={handleRouteActive('/saidas')}>Saídas</Link></li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  );
}

export { Header };
