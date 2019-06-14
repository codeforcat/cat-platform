import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QAList from '../../organisms/QAList/QAList.jsx';
import QAEntry from '../../organisms/QAEntry/QAEntry.jsx';

const qa_list = () => <QAList/>;
const qa_entry = () => <QAEntry/>;

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
          </ul>
        </nav>
        <Route path="/" exact component={qa_list} />
        <Route path="/qa_entry/" component={qa_entry} />
      </div>
    </Router>
  );
}
