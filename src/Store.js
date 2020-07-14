import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

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
    eventCount: 6,
    assigned: [
      {
        name: 'Create outline of presentation',
        manager: 'Tim',
        employee: 'Josh',
        id: 1,
      },
    ],
    events: [
      {
        name: 'Launch Party',
        start: '11:00',
        end: '12:00',
        id: 1,
      },
      {
        name: 'Demo Day',
        start: '11:00',
        end: '12:00',
        id: 2,
      },
      {
        name: 'Member Retreat',
        start: '11:00',
        end: '12:00',
        id: 3,
      },
      {
        name: 'Portfolio Review',
        start: '11:00',
        end: '12:00',
        id: 4,
      },
      {
        name: 'Framer Workshop',
        start: '11:00',
        end: '12:00',
        id: 5,
      },
    ],
  },
  loggedIn: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BYPASS_LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const Store = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Store;
