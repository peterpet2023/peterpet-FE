import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
