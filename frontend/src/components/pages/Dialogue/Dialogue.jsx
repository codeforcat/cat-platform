import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QAList from '../../organisms/QAList/QAList.jsx';
import QAEntryContainer from '../../../containers/QAEntryContainer/QAEntryContainer';
import EntityList from '../../organisms/EntityList/EntityList.jsx';
import EntityEntry from '../../organisms/EntityEntry/EntityEntry.jsx';

const qa_list = () => <QAList/>;
const qa_entry = () => <QAEntryContainer/>;
const entity_list = () => <EntityList/>;
const entity_entry = () => <EntityEntry/>;

export default function Dialogue() {
  return (
    <Router>
      <div>
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
        <Route path="/" exact component={qa_list} />
        <Route path="/qa_entry/" component={qa_entry} />
        <Route path="/entity_list/" exact component={entity_list} />
        <Route path="/entity_entry/" component={entity_entry} />
      </div>
    </Router>
  );
}
