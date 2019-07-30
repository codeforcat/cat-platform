import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();

  function handleFirstPageButtonClick() {
    props.onChangeFirstPage();
  }

  function handleBackButtonClick() {
    props.onChangePreviousPage(props.previous);
  }

  function handleNextButtonClick() {
    props.onChangeNextPage(props.next);
  }

  function handleLastPageButtonClick() {
    props.onChangeLastPage();
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={props.previous === null}
        aria-label="First Page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={props.previous === null}
        aria-label="Previous Page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      {props.current}
      <IconButton
        onClick={handleNextButtonClick}
        disabled={props.next === null}
        aria-label="Next Page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={props.next === null}
        aria-label="Last Page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
}

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
    width: '100%',
    marginTop: theme.spacing(3),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  pagination: {
    textAlign: 'right',
  },
}));

function TableList(props) {
  const classes = useStyles2();

  function handleToEditPage(id) {
    props.history.push(`/${props.editUrl}/${id}`);
  }

  function handleDelete(id, name) {
    props.delete(id, name);
  }

  return (
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{props.header[0]}</TableCell>
            <TableCell>{props.header[1]}</TableCell>
            <TableCell>{props.header[2]}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.column1}</TableCell>
              <TableCell>{row.column2}</TableCell>
              <TableCell>{row.column3}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="Edit"
                  className={classes.icon}
                  onClick={() => handleToEditPage(row.id)}
                >
                  <EditIcon/>
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  className={classes.icon}
                  onClick={() => handleDelete(row.id, row.column1)}
                >
                  <DeleteForeverIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className={classes.pagination}>
              <TablePaginationActions
                onChangeFirstPage={props.fetchFirst}
                onChangeLastPage={props.fetchLast}
                onChangeNextPage={props.fetchNext}
                onChangePreviousPage={props.fetchPrevious}
                current={props.current}
                next={props.next}
                previous={props.previous}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default withRouter(TableList);
