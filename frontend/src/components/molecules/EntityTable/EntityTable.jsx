import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TableList from '../../atoms/TableList/TableList.jsx';

const header = ['Entityの名前', 'Value', '']

export default function EntityTable(props) {
  return (
    <>
      <Input
        id="search"
        placeholder="Search..."
        onKeyUp={(e) => {if(e.key === 'Enter') props.actions.searchEntity(e.target.value)}}
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
        fetchFirst={props.actions.fetchFirstEntity}
        fetchLast={props.actions.fetchLastEntity}
        fetchNext={props.actions.fetchNextEntity}
        fetchPrevious={props.actions.fetchPreviousEntity}
        next={props.next}
        previous={props.previous}
      />
    </>
  );
}
