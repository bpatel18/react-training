import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import MainComp from './component/main-comp';

ReactDOM.render(
  <Provider store={store}>
    <MainComp/>
  </Provider>,
  document.getElementById('app')
);
