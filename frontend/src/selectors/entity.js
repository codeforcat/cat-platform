export function getEntityState(state, payload) {
  let valueWithSynonym = [];
  let values = [];
  const valueObj = payload.values;
  Object.keys(valueObj).forEach((value, index) => {
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
  Object.keys(valueObj).forEach((value, index) => {
    valueItem[index] = Object.assign({}, valueObj[index], {value_text: valueObj[index].value_text, synonym_temp_text: '', isValid: true, errorCode: 'value_text_empty_error'});
    values.push(valueItem[index]);
    let synonymsObj = valueObj[index].synonyms;
    Object.keys(synonymsObj).forEach((v, i) => {
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
