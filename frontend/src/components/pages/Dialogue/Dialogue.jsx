import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QAList from '../../organisms/QAList/QAList.jsx';
import QAEntryContainer from '../../../containers/QAEntryContainer/QAEntryContainer';
import EntityList from '../../organisms/EntityList/EntityList.jsx';
import EntityEntry from '../../organisms/EntityEntry/EntityEntry.jsx';

export default function Dialogue() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Ｑ＆Ａ一覧</Link>
          </li>
          <li>
            <Link to="/qa_entry">Ｑ＆Ａ入力修正</Link>
          </li>
          <li>
            <Link to="/entity_list/">Entity一覧</Link>
          </li>
          <li>
            <Link to="/entity_entry">Entity入力修正</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={QAList}/>
        <Route path="/qa_entry/" component={QAEntryContainer}/>
        <Route path="/entity_list/" component={EntityList}/>
        <Route path="/entity_entry/" component={EntityEntry}/>
      </Switch>
    </Router>
  );
}
