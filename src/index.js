import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import theme from '../src/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--q30c47g.us.auth0.com"
      clientId="XUisvGpG6n4AYeybRH8FFgm3ljpKFj5s"
      redirectUri={window.location.origin}
    >
      <Provider store={store()}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
