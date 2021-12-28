import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import theme from '../src/theme/theme';

ReactDOM.render(
  // <React.StrictMode>
      <Provider store={store()}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
