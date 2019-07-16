import React from "react";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import clsx from 'clsx';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DialogueListContainer from '../../../containers/DialogueListContainer/DialogueListContainer';
import DialogueEntryContainer from '../../../containers/DialogueEntryContainer/DialogueEntryContainer';
import EntityListContainer from '../../../containers/EntityListContainer/EntityListContainer';
import EntityEntryContainer from '../../../containers/EntityEntryContainer/EntityEntryContainer';

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        paddingTop: '1em'
      }
    },
    MuiInputBase: {
      input: {
        background: '#fff',
        padding: '.5em'
      },
      inputMultiline: {
        padding: '.5em'
      },
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Dialogue() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
              ライタソンプラットフォーム　α版
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">Ｑ＆Ａ一覧</Button>
            <Button color="inherit" component={RouterLink} to="/qa_entry">Ｑ＆Ａ新規入力</Button>
            <Button color="inherit" component={RouterLink} to="/entity_list">Entity一覧</Button>
            <Button color="inherit" component={RouterLink} to="/entity_entry">Entity新規入力</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleDrawerClose} component={RouterLink} to="/">
              <ListItemText primary="Ｑ＆Ａ一覧" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} component={RouterLink} to="/qa_entry">
              <ListItemText primary="Ｑ＆Ａ新規入力" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} component={RouterLink} to="/entity_list">
              <ListItemText primary="Entity一覧" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose} component={RouterLink} to="/entity_entry">
              <ListItemText primary="Entity新規入力" />
            </ListItem>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/" component={DialogueListContainer}/>
          <Route exact path="/qa_entry" component={DialogueEntryContainer}/>
          <Route exact path="/qa_entry/:id" component={DialogueEntryContainer}/>
          <Route exact path="/entity_list" component={EntityListContainer}/>
          <Route exact path="/entity_entry" component={EntityEntryContainer}/>
          <Route exact path="/entity_entry/:id" component={EntityEntryContainer}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}
