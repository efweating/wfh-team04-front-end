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
import Login from './components/auth/Login';
import SignIn from './components/auth/SignIn';
import Responses from './components/pages/Responses';

function App({ loggedIn, responseScreen } = this.props) {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            path='/login'
            render={() => (loggedIn ? <Redirect to='/' /> : <Login />)}
          />
          <Route
            path='/signin'
            render={() => (loggedIn ? <Redirect to='/' /> : <SignIn />)}
          />
          <Route
            path='/schedule'
            render={() => (loggedIn ? <Schedule /> : <Redirect to='/login' />)}
          />
          <Route
            path='/tips'
            render={() => (loggedIn ? <Tips /> : <Redirect to='/login' />)}
          />
          <Route
            path='/'
            render={() =>
              loggedIn ? (
                responseScreen ? (
                  <Responses />
                ) : (
                  <Dashboard />
                )
              ) : (
                <Redirect to='/login' />
              )
            }
          />
        </Switch>
        {loggedIn && <Navbar />}
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  responseScreen: state.responseScreen,
});

export default connect(mapStateToProps)(App);
