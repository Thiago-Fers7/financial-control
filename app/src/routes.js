import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { DueDate } from './pages/DueDate';
import { Entries } from './pages/Entries';
import { Exits } from './pages/Exits';
import { NotFound } from './pages/NotFound/Index';

function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vencimentos" component={DueDate} />
        <Route path="/entradas" component={Entries} />
        <Route path="/saidas" component={Exits} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes };
