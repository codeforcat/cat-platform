import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TableList from '../../atoms/TableList/TableList.jsx';

const header = ['Entityの名前', 'Value', '']

export default function EntityTable(props) {
  return (
    <>
      <InputLabel htmlFor="search">Search</InputLabel>
      <Input
        id="search"
        onKeyUp={(e) => {if(e.key === 'Enter' && e.target.value !== '') props.actions.searchEntity(e.target.value)}}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        }
      />
      <TableList
        rows={props.list}
        header={header}
        editUrl="entity_entry"
        delete={props.actions.preDeleteEntity}
      />
    </>
  );
}
