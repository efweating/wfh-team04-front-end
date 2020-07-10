import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Schedule from './components/pages/Schedule';
import Tips from './components/pages/Tips';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/schedule' component={Schedule} />
          <Route path='/tips' component={Tips} />
          <Route path='/' component={Dashboard} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
