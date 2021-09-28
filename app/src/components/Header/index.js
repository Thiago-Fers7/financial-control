import { Container, Content, Navigation } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <a href="$">HOME</a>

        <Navigation>
          <ul>
            <li><a href="$">Entradas</a></li>
            <li><a href="$">Vencimentos</a></li>
            <li><a href="$">Saídas</a></li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  );
}

export { Header };
