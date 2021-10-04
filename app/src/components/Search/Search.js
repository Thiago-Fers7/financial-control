import { useState } from 'react';
import { Header, SearchDate, SearchName } from './styles';

import { Button } from '../Button';

function Search() {
  const [nameSearch, setNameSearch] = useState('');

  function handleSearchName(e) {
    const { value } = e.target;
    setNameSearch(value);
  }

  function handleSubmitSearchName(e) {
    e.preventDefault();
  }

  function handleSubmitSearchDate(e) {
    e.preventDefault();
  }

  return (
    <Header>
      <section>
        <form onSubmit={handleSubmitSearchName}>
          <fieldset className="searchForName">
            <legend className="sr-only">Buscar</legend>

            <SearchName>
              <label htmlFor="name">
                <input
                  onChange={handleSearchName}
                  value={nameSearch}
                  className={nameSearch && 'isActive'}
                  type="Search"
                  id="name"
                  autoComplete="off"
                />
                <span>Buscar por nome</span>
              </label>

              <Button type="submit" text="Buscar" />
            </SearchName>
          </fieldset>
        </form>
      </section>

      <aside>
        <form onSubmit={handleSubmitSearchDate}>
          <fieldset className="searchForName">
            <legend className="sr-only">Buscar</legend>

            <SearchDate>
              <label htmlFor="initalDate">
                <span>Data inicial</span>
                <input type="date" id="initalDate" />
              </label>
              <label htmlFor="finalDate">
                <span>Data Final</span>
                <input type="date" id="finalDate" />
              </label>

              <label htmlFor="order">
                <span>Modo de ordenção</span>
                <select name="order" id="order">
                  <option value="asc">A partir do início</option>
                  <option value="desc">A partir do fim</option>
                </select>
              </label>

              <Button type="submit" text="Aplicar" />
            </SearchDate>
          </fieldset>
        </form>
      </aside>
    </Header>
  );
}

export { Search };
