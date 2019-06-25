import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import QAList from '../../organisms/QAList/QAList.jsx';
import QAEntryContainer from '../../../containers/QAEntryContainer/QAEntryContainer';
import EntityListContainer from '../../../containers/EntityListContainer/EntityListContainer';
import EntityEntryContainer from '../../../containers/EntityEntryContainer/EntityEntryContainer';

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        background: "#fff",
        padding: ".5em"
      },
      inputMultiline: {
        padding: ".5em"
      },
    },
  },
});

export default function Dialogue() {
  return (
    <MuiThemeProvider theme={theme}>
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
          <Route path="/entity_list/" component={EntityListContainer}/>
          <Route path="/entity_entry/" component={EntityEntryContainer}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}
