import React from 'react';
import {createRoot} from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import rootReducer from './modules';
import loggerMiddleware from './lib/loggerMiddleware';


const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const root = createRoot(document.getElementById("root"));



root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
