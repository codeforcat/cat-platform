import * as actionTypes from '../actions/entity';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  entity_id: 0,
  entity_name: '',
  isValid: false,
  errorCode: 'entity_empty_error',
  values_temp: [
    {
      value_temp_id: 0,
      value_text: '',
      synonym_temp_text: '',
      isValid: false,
      errorCode: 'value_text_empty_error',
      synonyms: []
    }
  ],
  synonyms_temp: [
    // {
    //   value_temp_id: 0,
    //   synonym_temp_id: 0,
    //   synonym_text: ''
    // }
  ],
  temp:{
    entity_name: '',
    entity_values: []
  },
  list: [],
  isUpdateStateEnable: false,
  isShowError: false,
  apiErrorMsg: '',
  errorMsg:{
    entity_empty_error: '入力してください',
    value_text_empty_error: '入力してください'
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState,action) {
  const value_temp_index = Math.max(...state.values_temp.map((value) => value.value_temp_id)) + 1;

  switch (action.type){
    case actionTypes.SET_ENTITY_STATE:
      return Object.assign({},state,{isUpdateStateEnable: true});
    case actionTypes.SET_ENTITY:
      return Object.assign({},state,{
        entity_name: action.payload.entity_name,
        values_temp: action.payload.values,
        synonyms_temp: action.payload.synonyms,
        isValid: action.payload.entity_name !== ''
      });
    case actionTypes.SET_ENTITY_ALL:
      return Object.assign({},state,{list: action.payload.data});
    case actionTypes.INPUT_ENTITY_ID:
      return Object.assign({},state,{entity_id: action.payload.entity_id});
    case actionTypes.INPUT_ENTITY_NAME:
      return Object.assign({},state,{entity_name: action.payload.entity_name, isValid: action.payload.entity_name !== ''});
    case actionTypes.INPUT_VALUE_TEXT:
      const makeValueState = (state,index,inputData) => {
        const new_list = [
          ...state.values_temp.slice(0, index),
          Object.assign({}, state.values_temp[index], {value_text: inputData, isValid: inputData !== ''}),
          ...state.values_temp.slice(index + 1)
        ];
        return Object.assign({},state,{
          values_temp: new_list
        })
      };
      return makeValueState(state,action.payload.idx,action.payload.value_text);
    case actionTypes.INPUT_SYNONYM_TEXT:
      const makeInputSynonymState = (state,index,inputData) => {
        const targetIndex = state.values_temp.findIndex((elm) => elm.value_temp_id === index);
        const new_list = [
          ...state.values_temp.slice(0, targetIndex),
          Object.assign({}, state.values_temp[targetIndex], {synonym_temp_text: inputData}),
          ...state.values_temp.slice(targetIndex + 1)
        ];
        return Object.assign({},state,{
          values_temp: new_list
        })
      };
      return makeInputSynonymState(state,action.payload.idx,action.payload.synonym_temp_text);
    case actionTypes.CLEAR_SYNONYM_TEXT:
      const makeClearSynonymState = (state,index) => {
        const targetIndex = state.values_temp.findIndex((elm) => elm.value_temp_id === index);
        const new_list = [
          ...state.values_temp.slice(0, targetIndex),
          Object.assign({}, state.values_temp[targetIndex], {synonym_temp_text: ''}),
          ...state.values_temp.slice(targetIndex + 1)
        ];
        return Object.assign({},state,{
          values_temp: new_list
        })
      };
      return makeClearSynonymState(state,action.payload.idx);
    case actionTypes.ADD_SYNONYM:
      const makeAddSynonymState = (state,value_index,inputData) => {
        const synonym_index = Object.keys(state.synonyms_temp).length;
        return Object.assign({},state,{
          synonyms_temp:[
            ...state.synonyms_temp,
            {value_temp_id: value_index, synonym_temp_id: synonym_index, synonym_text: inputData}
          ]
        });
      };
      return makeAddSynonymState(state,action.payload.value_idx,action.payload.synonym_text);
    case actionTypes.DELETE_SYNONYM:
       const makeDeleteSynonymState = (state,index,value_index) => {
         const deletedSynonym = state.synonyms_temp.filter((value, i) => value.value_temp_id === value_index && value.synonym_temp_id !== index);
         const otherSynonymRelatedValue = state.synonyms_temp.filter((value, i) => value.value_temp_id !== value_index);
         return Object.assign({}, state, {
           synonyms_temp: [...deletedSynonym, ...otherSynonymRelatedValue]
         })
        };
      return makeDeleteSynonymState(state,action.payload.idx,action.payload.value_idx);
    case actionTypes.ADD_VALUE:
      return Object.assign({},state,{
        values_temp:[
          ...state.values_temp,
          {value_temp_id: value_temp_index, value_text: '', synonym_temp_text: '', isValid: false, errorCode: 'value_text_empty_error', synonyms: []}
        ],
        synonyms_temp:[
          ...state.synonyms_temp
        ]
      });
    case actionTypes.DELETE_VALUE:
      const synonymRelatedValue = state.synonyms_temp.filter((value, i) => value.value_temp_id !== action.payload.value_temp_idx);
      return state.values_temp.length > 1 ? Object.assign({},state,{
        values_temp:[
          ...state.values_temp.slice(0,action.payload.idx),
          ...state.values_temp.slice(action.payload.idx + 1),
        ],
        synonyms_temp: synonymRelatedValue
        })
      : Object.assign({},state,{
        values_temp:[
          {value_temp_id: action.payload.value_temp_idx, value_text: '', synonym_temp_text: '', isValid: false, errorCode: 'value_text_empty_error', synonyms: []}
        ],
        synonyms_temp: synonymRelatedValue
      });
    case actionTypes.CLEAR_ENTITY:
      return Object.assign({},state,{
        entity_id: 0,
        entity_name: '',
        isValid: false,
        values_temp: [
          {
            value_temp_id: 0,
            value_text: '',
            synonym_temp_text: '',
            isValid: false,
            synonyms: []
          }
        ],
        synonyms_temp: [
          // {
          //   value_temp_id: 0,
          //   synonym_temp_id: 0,
          //   synonym_text: ''
          // }
        ],
        temp:{
          entity_name: '',
          entity_values: []
        },
        isUpdateStateEnable: false,
        isShowError: false,
        apiErrorMsg: ''
      });
    case actionTypes.FETCH_ERROR_ENTITY:
      return Object.assign({},state,{apiErrorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
