import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--q30c47g.us.auth0.com"
      clientId="XUisvGpG6n4AYeybRH8FFgm3ljpKFj5s"
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
