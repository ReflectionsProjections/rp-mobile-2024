import { State } from './types';

const initalState: State = {
  user_id: null,
  token: null,
  attendee: null,
  qrCodeURL: null,
  isAuthenticated: false,
};

function stateReducer(state = initalState, action): State {
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
    case 'SET_ATTENDEE':
      return {
        ...state,
        attendee: action.payload
      }
    case 'SET_QRCODE':
      return {
        ...state,
        qrCodeURL: action.payload
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