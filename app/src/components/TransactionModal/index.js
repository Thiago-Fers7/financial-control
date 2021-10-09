import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { formatSimpleTextInput, formatToBRLCurrency } from '../../utils/inputs';
import { simpleDateDefaultFormat } from '../../utils/dateMethods';
import { Button } from '../Button';
import {
  Container, Modal, Form, Inputs, InputField, Buttons,
} from './styles';

function TransactionModal({
  title, baseURL, handleModalActive, isModalActive, currentTransactions, setNewTransactions,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [moneyValue, setMoneyValue] = useState('R$ ');
  const [date, setDate] = useState(simpleDateDefaultFormat());
  const moneyValueToSend = useRef(0);

  function handleName({ target }) {
    const { value } = target;

    const MAXLENGTH = 40;
    const newValue = formatSimpleTextInput(value, MAXLENGTH);

    setName(newValue);
  }

  function handleDescription({ target }) {
    const { value } = target;

    const MAXLENGTH = 100;
    const newValue = formatSimpleTextInput(value, MAXLENGTH);

    setDescription(newValue);
  }

  function handleMoneyValue({ target }) {
    const { value } = target;

    const extractNumbers = value.replace(/\D+/g, '');

    const newValue = formatToBRLCurrency(extractNumbers, '###.###.###,##');

    moneyValueToSend.current = +(newValue.replaceAll('.', '').replace(',', '.'));

    setMoneyValue(`R$ ${newValue}`);
  }

  function handleDate({ target }) {
    const { value } = target;

    setDate(value);
  }

  function handleCloseModal({ target }) {
    if (target.id === 'forCloseModal') handleModalActive(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const init = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        value: moneyValueToSend.current,
        due_date: date,
      }),
    };

    const response = await fetch(baseURL, init);

    if (!response.ok) {
      const { error } = await response.json();
      return alert(error);
    }

    const data = await response.json();

    const myCurrentTransactions = [...currentTransactions];
    myCurrentTransactions.push(data);
    myCurrentTransactions.sort((a, b) => (new Date(a.due_date) < new Date(b.due_date) ? 1 : -1));

    setNewTransactions(myCurrentTransactions);
  }

  return (
    <Container id="forCloseModal" isActive={isModalActive} onMouseDown={handleCloseModal}>
      <Modal>
        <header>
          <h2>{title}</h2>
        </header>

        <section>
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Adicionar nova transação</legend>

              <Inputs>
                <InputField htmlFor="newName">
                  <span>Nome</span>
                  <input
                    onChange={handleName}
                    value={name}
                    type="text"
                    id="newName"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newDescription">
                  <span>Descrição</span>
                  <input
                    value={description}
                    onChange={handleDescription}
                    type="text"
                    id="newDescription"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newValue">
                  <span>Valor</span>
                  <input
                    value={moneyValue}
                    onChange={handleMoneyValue}
                    type="text"
                    id="newValue"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newDate">
                  <span>Data de Vencimento</span>
                  <input
                    value={date}
                    onChange={handleDate}
                    type="date"
                    id="newDate"
                    autoComplete="off"
                  />
                </InputField>
              </Inputs>

              <Buttons>
                <Button type="button" text="Cancelar" onClick={() => handleModalActive(false)} />
                <Button type="submit" text="Adicionar" />
              </Buttons>

            </fieldset>
          </Form>
        </section>

      </Modal>
    </Container>
  );
}

export { TransactionModal };

TransactionModal.propTypes = {
  title: PropTypes.string.isRequired,
  baseURL: PropTypes.string.isRequired,
  handleModalActive: PropTypes.func.isRequired,
  isModalActive: PropTypes.bool.isRequired,
  currentTransactions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  setNewTransactions: PropTypes.func.isRequired,
};
