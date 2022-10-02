import React from 'react';
import {createRoot} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
const root = createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
    <App />
  </Provider>,

);
