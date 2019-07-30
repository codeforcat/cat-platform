import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TableList from '../../atoms/TableList/TableList.jsx';

const header = ['Questionの名前', 'Phrases', 'Answer']

export default function DialogueTable(props) {
  return (
    <>
      <Input
        id="search"
        placeholder="Search..."
        onKeyUp={(e) => {if(e.key === 'Enter') props.actions.searchDialogue(e.target.value)}}
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
        fetchFirst={props.actions.fetchFirstDialogue}
        fetchLast={props.actions.fetchLastDialogue}
        fetchNext={props.actions.fetchNextDialogue}
        fetchPrevious={props.actions.fetchPreviousDialogue}
        current={props.current}
        next={props.next}
        previous={props.previous}
      />
    </>
  );
}
