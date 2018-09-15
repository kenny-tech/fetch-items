import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import ItemList from '../src/components/ItemList';

const store = configureStore();

render(
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementById('app')
);
