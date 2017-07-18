let user = {
  email: null,
  password: null
}

export const login = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_IN':
      const { email, password } = action;
      user = {
        email,
        password
      }
      return user;
    default:
      return {
         ...state
       }
  }
}
