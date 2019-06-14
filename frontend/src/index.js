import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './scss/styles.scss';
import './components/organisms/QAEntry/QAEntry.jsx';
import Dialogue from './components/pages/Dialogue/Dialogue.jsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dialogue/>,
    document.getElementById('app')
  );
});
