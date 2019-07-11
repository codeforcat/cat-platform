import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TableList from '../../atoms/TableList/TableList.jsx';

const header = ['Questionの名前', 'Phrases', 'Answer']

export default function QATable(props) {
  return (
    <>
      <InputLabel htmlFor="search">Search</InputLabel>
      <Input
        id="search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        }
      />
      <TableList
        rows={props.list}
        header={header}
        editUrl="qa_entry"
        delete={props.actions.preDeleteDialogue}
      />
    </>
  );
}
