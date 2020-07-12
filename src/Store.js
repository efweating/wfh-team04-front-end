import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
  },
  loggedIn: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

const Store = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Store;
