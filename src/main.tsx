import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { GlobalCSS } from './styles/global';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Home />
    </ThemeProvider>
  </StrictMode>
);
