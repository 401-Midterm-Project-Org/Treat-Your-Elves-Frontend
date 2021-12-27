import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Header current={props} />
      <Main current={props} />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myGroups: state.mygroups,
  }
}

const mapDispatchToProps = dispatch => ({
  getGroups: email => dispatch({type: 'GET_GROUPS', payload: email}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
