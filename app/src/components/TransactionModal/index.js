import PropTypes from 'prop-types';
import { useState } from 'react';
import { convertToReal } from '../../utils/convertToMoney';
import { Button } from '../Button';
import {
  Container, Modal, Form, Inputs, InputField, Buttons,
} from './styles';

function TransactionModal({
  title, baseURL, handleModalActive, isModalActive,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [moneyValue, setMoneyValue] = useState('');

  function handleName({ target }) {
    let { value } = target;

    const MAXLENGTH = 40;

    while (value.length > MAXLENGTH) {
      value = value.substr(0, value.length - 1);
    }

    value = value.replace(/( )+/g, ' ');

    setName(value);
  }

  function handleDescription({ target }) {
    let { value } = target;

    const MAXLENGTH = 100;

    while (value.length > MAXLENGTH) {
      value = value.substr(0, value.length - 1);
    }

    value = value.replace(/( )+/g, ' ');

    setDescription(value);
  }

  function handleMoneyValue({ target }) {
    let { value } = target;

    value = value.replace(/\D+/g, '');
    value = value.replace(/[0]/g, '');
    // value = value.replace(/( )+/g, ' ');

    setMoneyValue(convertToReal(+value));
  }

  function handleCloseModal({ target }) {
    if (target.id === 'forCloseModal') handleModalActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(baseURL);
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
};
