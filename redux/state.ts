const initalState = {};

function stateReducer(state = initalState, action) {
  if (action.type === 'user/set_identity') {
    return {
      ...state,
      user_id: action.payload,
    };
  }

  return state;
}

export default stateReducer;