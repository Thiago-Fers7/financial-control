import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

export const NotifyModalContext = createContext();

function NotifyModalContextProvider({ children }) {
  const [isNotify, setIsNotify] = useState(false);
  const [messageNotification, setMessageNotification] = useState('');

  function handleSetNotify(status = false) {
    setIsNotify(status);
  }

  function handleMessageNotification(message = '') {
    setMessageNotification(message);
  }

  return (
    <NotifyModalContext.Provider value={{
      isNotify,
      handleSetNotify,
      messageNotification,
      handleMessageNotification,
    }}
    >
      {children}
    </NotifyModalContext.Provider>
  );
}

export { NotifyModalContextProvider };

NotifyModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
