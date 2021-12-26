import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main current={props} />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myGroups: state.mygroups,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  getGroups: userID => dispatch({type: 'GET_GROUPS', payload: userID}),
  getUser: email => dispatch({type: 'GET_USER', payload: email}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
