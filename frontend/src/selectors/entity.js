function createData(id, column1, column2, column3) {
  return { id, column1, column2, column3 };
}

export function setEntityList(state, payload) {
  let rows = [];
  const entityObj = payload;
  Object.keys(entityObj).forEach((index) => {
    let valueTexts = [];
    entityObj[index].entity_values.map((item, i) => {
      valueTexts.push(item.value_text)
    });
    rows.push(createData(entityObj[index].entity_id, entityObj[index].entity_id, entityObj[index].entity_name, valueTexts.join(', ')));
  });
  return rows;
}

export function getEntityState(state, payload) {
  let valueWithSynonym = [];
  let values = [];
  const valueObj = payload.values;
  Object.keys(valueObj).forEach((index) => {
    let synonymRelatedValue = payload.synonyms.filter((v, i) => v.value_temp_id === valueObj[index].value_temp_id);
    valueWithSynonym[index] = Object.assign({}, valueObj[index], {value_text: valueObj[index].value_text, synonyms: synonymRelatedValue});
    values.push(valueWithSynonym[index]);
  });
  return Object.assign({},state,{
    temp:{
      entity_name: payload.entity_name,
      entity_values: values
    }
  });
}

export function setEntityTemp(state, payload) {
  let valueItem = [];
  let values = [];
  let synonyms = [];
  const valueObj = payload.entity_values;
  Object.keys(valueObj).forEach((index) => {
    valueItem[index] = Object.assign({}, valueObj[index], {value_text: valueObj[index].value_text, synonym_temp_text: '', isValid: true, errorCode: 'value_text_empty_error'});
    values.push(valueItem[index]);
    let synonymsObj = valueObj[index].synonyms;
    Object.keys(synonymsObj).forEach((i) => {
      synonyms.push(synonymsObj[i]);
    });
  });
  return Object.assign({}, state, {
    entity_name: payload.entity_name,
    values_temp: values,
    synonyms_temp: synonyms
  });
}

export function isValidState(state) {
  return [
    state.entity.isValid,
    state.entity.values_temp.filter(item=>item.isValid === true).length === state.entity.values_temp.length
  ].every(item=>item);
}
