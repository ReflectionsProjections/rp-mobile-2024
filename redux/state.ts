const initalState = {
  user_id: null,
  token: null,
  isAuthenticated: false,
};

function stateReducer(state = initalState, action) {
  switch(action.type) {
    case 'user/set_identity':
      return {
        ...state,
        user_id: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }
  }

  return state;
}

export default stateReducer;