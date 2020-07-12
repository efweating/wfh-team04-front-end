import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/pages/Dashboard';
import Schedule from './components/pages/Schedule';
import Tips from './components/pages/Tips';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';

function App({ loggedIn } = this.props) {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            path='/login'
            render={() => (loggedIn ? <Redirect to='/' /> : <Login />)}
          />
          <Route
            path='/dashboard'
            render={() => (loggedIn ? <Dashboard /> : <Redirect to='/login' />)}
          />
          <Route
            path='/tips'
            render={() => (loggedIn ? <Tips /> : <Redirect to='/login' />)}
          />
          <Route
            path='/'
            render={() => (loggedIn ? <Schedule /> : <Redirect to='/login' />)}
          />
        </Switch>
        {loggedIn && <Navbar />}
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(App);
