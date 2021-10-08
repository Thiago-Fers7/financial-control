import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  Container, Modal, Form, Inputs, InputField, Buttons,
} from './styles';

function TransactionModal({
  title, baseURL, handleModalActive, isModalActive,
}) {
  function handleCloseModal({ target }) {
    if (target.id === 'forCloseModal') handleModalActive(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(baseURL);
  }

  return (
    <Container id="forCloseModal" isActive={isModalActive} onClick={handleCloseModal}>
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
                    type="text"
                    id="newName"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newName">
                  <span>Descrição</span>
                  <input
                    type="text"
                    id="newName"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newName">
                  <span>Valor</span>
                  <input
                    type="text"
                    id="newName"
                    autoComplete="off"
                  />
                </InputField>

                <InputField htmlFor="newName">
                  <span>Data de Vencimento</span>
                  <input
                    type="date"
                    id="newName"
                    autoComplete="off"
                  />
                </InputField>
              </Inputs>

              <Buttons>
                <Button type="button" text="Cancelar" onClick={() => handleModalActive(false)} />
                <Button type="submit" text="Adicionar" onClick={() => { }} />
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
