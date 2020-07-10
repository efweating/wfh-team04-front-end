import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Dashboard from './components/pages/Dashboard';
import Schedule from './components/pages/Schedule';
import Tips from './components/pages/Tips';
import Navbar from './components/layout/Navbar';

const initialState = {
  articles: [
    {
      url:
        'https://www.clickorlando.com/resizer/Jpt8mNL-CQcJS36yiJ6wJyNcnuM=/520x347/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/OEBI4UCVP5CKJDVLIEBQSW7ZFU.webp',
      title: 'SpaceX Launches Falcon 9',
      author: 'spacex.com',
      category: 'Technology',
      id: 1,
    },
    {
      url:
        'https://www.clickorlando.com/resizer/Jpt8mNL-CQcJS36yiJ6wJyNcnuM=/520x347/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/OEBI4UCVP5CKJDVLIEBQSW7ZFU.webp',
      title: 'SpaceX Launches Falcon 9',
      author: 'spacex.com',
      category: 'Technology',
      id: 2,
    },
    {
      url:
        'https://www.clickorlando.com/resizer/Jpt8mNL-CQcJS36yiJ6wJyNcnuM=/520x347/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/OEBI4UCVP5CKJDVLIEBQSW7ZFU.webp',
      title: 'SpaceX Launches Falcon 9',
      author: 'spacex.com',
      category: 'Technology',
      id: 3,
    },
  ],
  curUser: {
    name: 'Josh',
    token: 'fakeToken',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/schedule' component={Schedule} />
          <Route path='/tips' component={Tips} />
          <Route path='/' component={Dashboard} />
        </Switch>
        <Navbar />
      </Router>
    </Provider>
  );
}

export default App;
