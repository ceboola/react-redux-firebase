export const setphoto = (state = [], action) => {
  switch(action.type) {
    case 'SET_PHOTOS':
      const { photos } = action;
      return photos;
    default:
      return {
        ...state
      }
  }
}
