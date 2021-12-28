import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import theme from '../src/theme/theme';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reduxStore from './store';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={reduxStore()}>
      {/* Any component nested inside the Provider
          can consume the store

          We don't need to inject props as attributes

          We just need to import connect from 'react-redux'
          in the components that need the store, and
          destructure the store props at the level of
          method-injection
      */}
      <App/>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
