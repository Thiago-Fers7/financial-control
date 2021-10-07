import { useState } from 'react';
import { Header, SearchDate, SearchName } from './styles';

import { Button } from '../Button';
import { DropDown } from '../Icons';

function Search() {
  const [nameSearch, setNameSearch] = useState('');
  const [isActiveSearchDate, setIsActiveSearchDate] = useState(false);

  function handleSearchName(e) {
    const { value } = e.target;
    setNameSearch(value);
  }

  window.onresize = (e) => {
    const width = e.target.innerWidth;

    if (width > 630) {
      setIsActiveSearchDate(false);
    }
  };

  function handleSetActiveSearchDate() {
    setIsActiveSearchDate(!isActiveSearchDate);
  }

  function handleSubmitSearchName(e) {
    e.preventDefault();
  }

  function handleSubmitSearchDate(e) {
    e.preventDefault();
    handleSetActiveSearchDate();
  }

  return (
    <Header>
      <section>
        <form onSubmit={handleSubmitSearchName}>
          <fieldset className="searchForName">
            <legend>Buscar</legend>

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

              <Button type="submit" text="Buscar" onClick={() => {}} />
            </SearchName>
          </fieldset>
        </form>
      </section>

      <aside>
        <div>
          <span onClick={handleSetActiveSearchDate} className={isActiveSearchDate ? 'expand' : ''}>
            Opções de busca
            <span>
              <DropDown color="#000" />
            </span>
          </span>
        </div>

        <form className={isActiveSearchDate ? 'active' : ''} onSubmit={handleSubmitSearchDate}>
          <fieldset className="searchForName">
            <legend>Buscar por nome</legend>

            <SearchDate>
              <label htmlFor="initialDate">
                <span>Data inicial</span>
                <input type="date" id="initialDate" />
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

              <Button type="submit" text="Aplicar" onClick={() => {}} />
            </SearchDate>
          </fieldset>
        </form>
      </aside>
    </Header>
  );
}

export { Search };
