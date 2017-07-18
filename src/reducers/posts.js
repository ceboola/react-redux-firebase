import logo from '../logo.svg';

export const posts = (state = [], action) => {



  const i = action.index;

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]

      case 'DECREMENT_LIKES' :
        return [
          ...state.slice(0, i),
          {...state[i], unlikes: state[i].unlikes - 1},
          ...state.slice(i + 1),
        ]

        case 'ADD_POST':
          return [...state, {
            caption: action.caption,
            display_src: action.display_src || logo,
            likes: 0,
            unlikes: 0,
            code: Math.random().toString(36).substr(2, 10)
          }]

          case 'REMOVE_POST':
          return [
            ...state.slice(0,action.i),
            ...state.slice(action.i + 1)
          ]

    default:
      return state;


  }
}
