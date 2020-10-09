import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AdminApp from './AdminApp';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import './assets/scss/base.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Route  } from 'react-router-dom';
import rootReducer from './store/rootReducer';
import { loadState, saveState } from './localStorage';
// import throttle from 'lodash/throttle';

const presistedState = loadState();
const store = createStore(rootReducer, presistedState, composeWithDevTools(applyMiddleware(logger, thunk)));

// store.subscribe(
//   throttle(() => {
//     saveState(store.getState());
//   }, 500)
// );

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
