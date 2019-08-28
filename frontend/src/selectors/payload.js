export function createPayloadArray(state) {
  const items = state.payload.payloads;
  let newPayloadArray = [];
  Object.keys(items).forEach((index) => {
    const contents = items[index].contents;
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
              actions: contents.buttonsActions
            }
          };
        case 'confirm':
          return {
            type: 'template',
            altText: contents.confirmAltText,
            template: {
              type: 'confirm',
              text: contents.confirmAltText,
              actions: contents.confirmActions
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
