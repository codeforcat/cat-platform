import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import QAListContainer from '../../../containers/QAListContainer/QAListContainer';
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
              <Link to="/qa_entry">Ｑ＆Ａ新規入力</Link>
            </li>
            <li>
              <Link to="/entity_list">Entity一覧</Link>
            </li>
            <li>
              <Link to="/entity_entry">Entity新規入力</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={QAListContainer}/>
          <Route exact path="/qa_entry" component={QAEntryContainer}/>
          <Route exact path="/qa_entry/:id" component={QAEntryContainer}/>
          <Route exact path="/entity_list" component={EntityListContainer}/>
          <Route exact path="/entity_entry" component={EntityEntryContainer}/>
          <Route exact path="/entity_entry/:id" component={EntityEntryContainer}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}
