export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export const decrement = (index) => {
  return {
    type: 'DECREMENT_LIKES',
    index
  }
}

export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export const addPost = (caption, display_src, code) => {
  return {
    type: 'ADD_POST',
    caption,
    display_src,
    code
  }
}

export const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}

export const removePost = (i) => {
  return {
    type: 'REMOVE_POST',
    i
  }
}

export const showButton = (buttonState) => {
  return {
    type: 'BUTTON_SHOW',
    buttonState: false
  }
}

export const hideButton = (buttonState) => {
  return {
    type: 'BUTTON_HIDE',
    buttonState: true
  }
}

export const logUser = (email, password) => {
  const action = {
    type: 'SIGN_IN',
    email,
    password
  }
  return action
}

export const setPhotos = (photos, email, caption) => {
  const action = {
    type: 'SET_PHOTOS',
    photos,
    email,
    caption
  }
  return action
}
