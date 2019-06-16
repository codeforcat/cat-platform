import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from './store/configureStore';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './scss/styles.scss';
import './components/organisms/QAEntry/QAEntry.jsx';
import Dialogue from './components/pages/Dialogue/Dialogue.jsx';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <Dialogue/>
    </Provider>,
    document.getElementById('app')
  );
});
