export function createPayloadArray(state) {
  const items = state.payload.payloads;
  let newPayloadArray = [];
  Object.keys(items).forEach((index) => {
    const contents = items[index].contents;
    let newActionsArray = [];
    const shapedActions = (actionsArray) => {
      Object.keys(actionsArray).forEach((idx) => {
        const actions = () => {
          switch (actionsArray[idx].type) {
            case 'message':
              return {
                type: actionsArray[idx].type,
                label: actionsArray[idx].label,
                text: actionsArray[idx].text
              };
            case 'postback':
              return {
                type: actionsArray[idx].type,
                label: actionsArray[idx].label,
                displayText: actionsArray[idx].displayText,
                data: actionsArray[idx].data
              };
          };
        };
        newActionsArray.push(actions());
      });
      return newActionsArray;
    };
    const shapedPayload = () => {
      switch (contents.state) {
        case 'text':
          return {
            state: 'text',
            message: {
              type: 'text',
              text: contents.text
            }
          };
        case 'buttons':
          return {
            state: 'buttons',
            message: {
              type: 'template',
              altText: contents.buttonsAltText,
              template: {
                type: 'buttons',
                text: contents.buttonsAltText,
                actions: shapedActions(contents.buttonsActions)
              }
            }
          };
        case 'confirm':
          return {
            state: 'confirm',
            message: {
              type: 'template',
              altText: contents.confirmAltText,
              template: {
                type: 'confirm',
                text: contents.confirmAltText,
                actions: shapedActions(contents.confirmActions)
              }
            }
          };
        case 'image':
          return {
            state: 'confirm',
            message: {
              type: 'image',
              originalContentUrl: contents.originalContentUrl,
              previewImageUrl: contents.previewImageUrl
            }
          };
      }
    };
    newPayloadArray.push(shapedPayload());
  });
  return newPayloadArray;
}

function containEmpty(json_data){
  if(json_data.length === 0) {
    return true;
  }

  if(typeof json_data !== 'object') {
    return false;
  }

  let flag = false;

  for(let key in json_data){
    if(containEmpty(json_data[key])) {
      flag = true;
    }
  }
  // const isValidJson = targetIndex.filter(item=>item === true).length === 0;

  return flag;
}

export function isValidPayloadState(state, data){
  let validArray = [];
  Object.keys(data).forEach((index) => {
    validArray.push(!containEmpty(data[index]));
  });
  const isValidJson = validArray.filter(item=>item === false).length === 0;
  return {isValidJson, validArray};
}
