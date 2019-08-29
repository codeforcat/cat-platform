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
            type: 'text',
            text: contents.text
          };
        case 'buttons':
          return {
            type: 'template',
            altText: contents.buttonsAltText,
            template: {
              type: 'buttons',
              text: contents.buttonsAltText,
              actions: shapedActions(contents.buttonsActions)
            }
          };
        case 'confirm':
          return {
            type: 'template',
            altText: contents.confirmAltText,
            template: {
              type: 'confirm',
              text: contents.confirmAltText,
              actions: shapedActions(contents.confirmActions)
            }
          };
        case 'image':
          return {
            type: 'image',
            originalContentUrl: contents.originalContentUrl,
            previewImageUrl: contents.previewImageUrl
          };
      }
    };
    newPayloadArray.push(shapedPayload());
  });
  return newPayloadArray;
}
