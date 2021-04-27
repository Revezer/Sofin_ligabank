import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reduser';
import api from './services/api';
import './sass/app.scss';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
  );

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
