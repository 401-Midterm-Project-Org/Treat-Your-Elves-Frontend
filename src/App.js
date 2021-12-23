import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme/theme'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
