import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { getUserAuth } from './actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
// import db from './firebase';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);



  return (
    <div className="App">
      <Router>
        <Routes >
          <Route exact path="/" element={<Login />} ></Route>
          {/* <Route exact path="/home" element={<Header /> <Home />}></Route> */}
          <Route exact path="/home" element={<div><Header /><Home /></div>} />
        </Routes >
      </Router>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
