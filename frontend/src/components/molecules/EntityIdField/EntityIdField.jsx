import React, { useEffect } from 'react';

export default function EntityIdField(props) {
  useEffect(() => {
    if(props.params) {
      props.actions.inputEntityId(props.params);
      props.actions.setEntityState(props.params);
    }
    return () => props.actions.clearEntity();
  },[props.params]);

  return (
    <>
    </>
  );
}
