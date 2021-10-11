import { useContext, useEffect, useRef } from 'react';
import { NotifyModalContext } from '../../contexts/NotifyModalContext';
import { Container, ShowMessage } from './styles';

import { LoadAnimation } from '../Loader';

function NotifyModal() {
  const { isNotify, messageNotification } = useContext(NotifyModalContext);

  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  });

  return (
    <>
      {!firstRender.current ? (
        <Container status={isNotify}>
          <span>
            {isNotify ? <LoadAnimation /> : <ShowMessage>{messageNotification}</ShowMessage>}
          </span>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export { NotifyModal };
