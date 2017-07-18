export const buttons = (state = [], action) => {
  switch(action.type) {

    case 'BUTTON_SHOW':
    return Object.assign(...state, {
        buttonState: action.buttonState
      });

      case 'BUTTON_HIDE':
      return Object.assign(...state, {
          buttonState: action.buttonState
        });

    default:
      return {
        ...state
      }
  }
}
