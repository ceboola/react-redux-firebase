export const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment,
        date: new Date(new Date().getTime()).toLocaleTimeString()
      }];

    case 'REMOVE_COMMENT':
    return [
      ...state.slice(0,action.i),
      ...state.slice(action.i + 1)
    ]
    default:
      return state;
  }
}

export const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
