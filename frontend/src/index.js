import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import './components/organisms/QAEntry/QAEntry.jsx';
import QAEntry from "./components/organisms/QAEntry/QAEntry.jsx";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <QAEntry/>,
    document.getElementById('app')
  );
});
