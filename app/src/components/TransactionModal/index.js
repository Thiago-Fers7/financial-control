import PropTypes from 'prop-types';
import {
  useContext, useEffect, useRef, useState,
} from 'react';
import { formatSimpleTextInput, formatToBRLCurrency } from '../../utils/inputs';
import { simpleDateDefaultFormat } from '../../utils/dateMethods';
import { Button } from '../Button';
import {
  Container, Modal, Form, Inputs, InputField, Buttons,
} from './styles';
import { NotifyModalContext } from '../../contexts/NotifyModalContext';

function TransactionModal({
  title, baseURL, handleModalActive, isModalActive, currentTransactions, setNewTransactions,
}) {
  const { handleSetNotify, handleMessageNotification } = useContext(NotifyModalContext);

  const initialStateInputValues = {
    name: '',
    description: '',
    moneyValue: 'R$ ',
    date: simpleDateDefaultFormat(),
  };

  const initialStateIsInputValues = {
    isName: false,
    isDescription: false,
    isMoneyValue: true,
    isDate: true,
  };

  const [{
    name, description, moneyValue, date,
  }, setInputValue] = useState(initialStateInputValues);

  const moneyValueToSend = useRef(0);

  const [{
    isName, isDescription, isMoneyValue, isDate,
  }, setIsInputValue] = useState(initialStateIsInputValues);

  const [isInvalidValues, setIsInvalidValues] = useState(true);
  useEffect(() => {
    if (isName && isDescription && isDate && isMoneyValue) {
      setIsInvalidValues(false);
    } else {
      setIsInvalidValues(true);
    }
  }, [isName, isDescription, isDate, isMoneyValue]);

  function handleName({ target }) {
    const { value } = target;

    const MAXLENGTH = 40;
    const newValue = formatSimpleTextInput(value, MAXLENGTH);

    if (newValue && newValue !== ' ') {
      setIsInputValue((prevState) => ({ ...prevState, isName: true }));
    } else {
      setIsInputValue((prevState) => ({ ...prevState, isName: false }));
    }

    setInputValue((prevState) => ({ ...prevState, name: newValue }));
  }

  function handleDescription({ target }) {
    const { value } = target;

    const MAXLENGTH = 100;
    const newValue = formatSimpleTextInput(value, MAXLENGTH);

    if (newValue && newValue !== ' ') {
      setIsInputValue((prevState) => ({ ...prevState, isDescription: true }));
    } else {
      setIsInputValue((prevState) => ({ ...prevState, isDescription: false }));
    }

    setInputValue((prevState) => ({ ...prevState, description: newValue }));
  }

  function handleMoneyValue({ target }) {
    const { value } = target;

    const extractNumbers = value.replace(/\D+/g, '');

    const newValue = formatToBRLCurrency(extractNumbers, '###.###.###,##');

    moneyValueToSend.current = +(newValue.replaceAll('.', '').replace(',', '.'));

    if (!Number.isNaN(Number(moneyValueToSend.current))) {
      setIsInputValue((prevState) => ({ ...prevState, isMoneyValue: true }));
    } else {
      setIsInputValue((prevState) => ({ ...prevState, isMoneyValue: true }));
    }

    setInputValue((prevState) => ({ ...prevState, moneyValue: `R$ ${newValue}` }));
  }

  function handleDate({ target }) {
    const { value } = target;

    const dateValue = new Date(value);

    const isDateValue = dateValue.toString() !== 'Invalid Date';

    if (isDateValue) {
      setIsInputValue((prevState) => ({ ...prevState, isDate: true }));
    } else {
      setIsInputValue((prevState) => ({ ...prevState, isDate: true }));
    }

    setInputValue((prevState) => ({ ...prevState, date: value }));
  }

  function handleCloseModal({ target }) {
    if (target.id === 'forCloseModal') handleModalActive(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isInvalidValues) {
      return;
    }

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

    handleSetNotify(true);
    fetch(baseURL, init)
      .then((response) => {
        if (!response.ok) {
          const { error } = response.json();
          throw error;
        }

        return response.json();
      })
      .then((data) => {
        const myCurrentTransactions = [...currentTransactions];
        myCurrentTransactions.push(data);
        myCurrentTransactions.sort((a, b) => (new Date(a.due_date) < new Date(b.due_date) ? 1 : -1));

        setNewTransactions(myCurrentTransactions);
        handleMessageNotification('Nova transação adicionada!');
      }).catch((err) => {
        if (err) {
          handleMessageNotification('Falha ao adicionar nova transação');
        } else {
          handleMessageNotification('Erro inesperado, tente novamente mais tarde!');
        }
      })
      .finally(() => {
        setInputValue(initialStateInputValues);
        setIsInputValue(initialStateIsInputValues);

        handleModalActive(false);
        handleSetNotify(false);
      });
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
                  <span>Nome *</span>
                  <input
                    onChange={handleName}
                    value={name}
                    type="text"
                    id="newName"
                    autoComplete="off"
                  />
                  {!isName && name !== '' && (
                    <strong>Preecha o campo antes de continuar!</strong>
                  )}
                </InputField>

                <InputField htmlFor="newDescription">
                  <span>Descrição *</span>
                  <input
                    value={description}
                    onChange={handleDescription}
                    type="text"
                    id="newDescription"
                    autoComplete="off"
                  />
                  {!isDescription && description !== '' && (
                    <strong>Preecha o campo antes de continuar!</strong>
                  )}
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
                  <span>Data de Vencimento *</span>
                  <input
                    value={date}
                    onChange={handleDate}
                    type="date"
                    id="newDate"
                    autoComplete="off"
                  />
                  {!isDate && (
                    <strong>Preecha o campo antes de continuar!</strong>
                  )}
                </InputField>
              </Inputs>

              <Buttons>
                <Button type="button" text="Cancelar" onClick={() => handleModalActive(false)} />
                {!isInvalidValues && (
                  <Button type="submit" text="Adicionar" />
                )}
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
