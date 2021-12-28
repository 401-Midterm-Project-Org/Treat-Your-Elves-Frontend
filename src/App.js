import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import getGroups from './store/actions/groups';

import { connect } from 'react-redux';
import { useEffect } from 'react';



function App(props) {
  
  useEffect(() => {
      props.getGroups('justin.hamerly@gmail.com');
  }, [])

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
  getGroups: (email) => dispatch(getGroups(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
