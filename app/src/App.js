import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { Routes } from './routes';
import { GlobalStyles } from './styles/global';
import { NotifyModalContextProvider } from './contexts/NotifyModalContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NotifyModalContextProvider>
        <Routes />
      </NotifyModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
