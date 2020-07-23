import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const initialState = {
  articles: [
    {
      url:
        'https://hbr.org/resources/images/article_assets/hbr/1410/R1410E_WOLF.jpg',
      title: 'Workspaces That Move People',
      author: 'hbr.org',
      category: 'Workspace',
      id: 1,
      location: 'https://hbr.org/2014/10/workspaces-that-move-people',
    },
    {
      url:
        'https://jamesclear.com/wp-content/uploads/2013/02/physics-productivity-first-law.jpg',
      title: 'The Productivity Guide: Time Management Strategies That Work',
      author: 'jamesclear.com',
      category: 'Productivity',
      id: 2,
      location: 'https://jamesclear.com/productivity',
    },
    {
      url: 'https://greatergood.berkeley.edu/images/uploads/Cat_napping.png',
      title: 'How Resting More Can Boost Your Productivity',
      author: 'greatergood.berkeley.edu',
      category: 'Resting',
      id: 3,
      location:
        'https://greatergood.berkeley.edu/article/item/how_resting_more_can_boost_your_productivity',
    },
    {
      url:
        'https://www.usnews.com/dims4/USNEWS/69c6ebf/2147483647/resize/300x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F12%2Fd9%2F63c2b71c4c97848aaec27fc632ba%2F160705-studentlaptop-stock.jpg',
      title: '10 Ways Remote Workers Can Improve Communication Skills',
      author: 'money.usnews.com',
      category: 'Communication',
      id: 4,
      location:
        'https://money.usnews.com/careers/articles/how-to-communicate-effectively-when-working-with-a-remote-team',
    },
    {
      url:
        'https://www.itagroup.com/sites/default/files/styles/articles/public/inline-images/remote-employee-engagement-tactics-that-work_0.jpg?itok=8EDoOn-x',
      title: '5 Remote Employee Engagement Secrets That Work',
      author: 'itagroup.com',
      category: 'Engagement',
      id: 5,
      location:
        'https://www.itagroup.com/insights/5-remote-employee-engagement-secrets-that-work',
    },
    {
      url:
        'https://www.investopedia.com/thmb/vbttH8FgZaEOfvo-PkzssYSjJME=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1131816600-f7fa5a3a278341e88f73f6a14f7867a7.jpg',
      title: 'The Ultimate Working From Home Guide',
      author: 'investopedia.com',
      category: 'Productivity',
      id: 6,
      location:
        'https://www.investopedia.com/personal-finance/work-from-home-guide/',
    },
    {
      url:
        'https://www.fm-magazine.com/content/dam/fmm/news/wfh-breaks-720.jpg.transform/750w/image.png',
      title: 'Take These Healthy Breaks While Working From Home',
      author: 'fm-magazing.com',
      category: 'Resting',
      id: 7,
      location:
        'https://www.fm-magazine.com/news/2020/apr/healthy-work-from-home-breaks-and-habits.html#:~:text=Take%20meditation%20and%20stretching%20breaks,feel%20good%2C%E2%80%9D%20said%20Roed.',
    },
  ],
  curUser: {},
  recommended: [
    {
      url:
        'https://hbr.org/resources/images/article_assets/hbr/1410/R1410E_WOLF.jpg',
      title: 'Workspaces That Move People',
      author: 'hbr.org',
      category: 'Workspace',
      id: 1,
      location: 'https://hbr.org/2014/10/workspaces-that-move-people',
    },
    {
      url:
        'https://jamesclear.com/wp-content/uploads/2013/02/physics-productivity-first-law.jpg',
      title: 'The Productivity Guide: Time Management Strategies That Work',
      author: 'jamesclear.com',
      category: 'Productivity',
      id: 2,
      location: 'https://jamesclear.com/productivity',
    },
  ],
  loggedIn: false,
  checkIn: {},
  checkInModal: false,
  checkInModalState: {
    button: 0,
    thoughts: '',
  },
  addTaskModal: false,
  addTaskModalState: {
    name: '',
    start: '',
    end: '',
  },
  responseScreen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BYPASS_LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    case 'SHOW_RESPONSES':
      return {
        ...state,
        responseScreen: action.payload,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: true,
        curUser: action.payload,
      };
    case 'COMPLETE_ITEM':
      return {
        ...state,
        checkIn: action.payload,
        curUser: {
          ...state.curUser,
          responses: {
            ...state.curUser.responses,
            noresponse: state.curUser.responses.noresponse + 1,
          },
          eventCount: state.curUser.eventCount - 1,
        },
        checkInModalState: {
          button: 0,
          thoughts: '',
        },
      };
    case 'ADDTASK_MODAL':
      return {
        ...state,
        addTaskModal: action.payload,
      };
    case 'UPDATE_TASKNAME':
      return {
        ...state,
        addTaskModalState: {
          ...state.addTaskModalState,
          name: action.payload,
        },
      };
    case 'UPDATE_TASKSTART':
      return {
        ...state,
        addTaskModalState: {
          ...state.addTaskModalState,
          start: action.payload,
        },
      };
    case 'UPDATE_TASKEND':
      return {
        ...state,
        addTaskModalState: {
          ...state.addTaskModalState,
          end: action.payload,
        },
      };
    case 'SUBMIT_TASK':
      return {
        ...state,
        curUser: {
          ...state.curUser,
          events: [
            ...state.curUser.events,
            {
              name: state.addTaskModalState.name,
              start: state.addTaskModalState.start,
              end: state.addTaskModalState.end,
              type: 'event',
              id: state.curUser.events.length + 1,
            },
          ],
          eventCount: state.curUser.eventCount + 1,
        },
        addTaskModalState: {
          name: '',
          start: '',
          end: '',
        },
      };
    case 'CHECKIN_MODAL':
      return {
        ...state,
        checkInModal: action.payload,
      };
    case 'MARK_TASK':
      return {
        ...state,
        checkInModalState: {
          ...state.checkInModalState,
          button: action.payload,
        },
      };
    case 'UPDATE_RESPONSE':
      return {
        ...state,
        checkInModalState: {
          ...state.checkInModalState,
          thoughts: action.payload,
        },
      };
    case 'SUBMIT_CHECKIN':
      let newComplete = [
        ...state.curUser.responses.complete,
        {
          ...state.checkIn,
          message: state.checkInModalState.thoughts,
          feel:
            state.checkInModalState.button === 1
              ? 'productive'
              : 'unproductive',
        },
      ];

      return {
        ...state,
        curUser: {
          ...state.curUser,
          responses: {
            ...state.curUser.responses,
            noresponse:
              state.checkInModalState.button !== 0
                ? state.curUser.responses.noresponse - 1
                : state.curUser.responses.noresponse,
            productive:
              state.checkInModalState.button === 1
                ? state.curUser.responses.productive + 1
                : state.curUser.responses.productive,
            unproductive:
              state.checkInModalState.button === 2
                ? state.curUser.responses.unproductive + 1
                : state.curUser.responses.unproductive,
            complete: newComplete,
          },
        },
        checkIn: {},
        checkInModalState: {
          button: 0,
          thoughts: '',
        },
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
