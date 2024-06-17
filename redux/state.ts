import { State } from './types';
import { AuthActionTypes, SET_TOKEN, SET_ATTENDEE, SET_QRCODE, LOGOUT } from './actions';

const initialState: State = {
  user_id: null,
  token: null,
  attendee: null,
  qrCodeURL: null,
  isAuthenticated: false,
};

function stateReducer(state = initialState, action: AuthActionTypes): State {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case SET_ATTENDEE:
      return {
        ...state,
        attendee: action.payload,
      };
    case SET_QRCODE:
      return {
        ...state,
        qrCodeURL: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        attendee: null,
        qrCodeURL: null,
        user_id: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default stateReducer;