import { Dispatch } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store"; // Assuming you have a store.ts defining the RootState
import { Attendee } from "./types";
import * as AuthSession from "expo-auth-session";

// Action Types
export const SET_TOKEN = "SET_TOKEN";
export const SET_ATTENDEE = "SET_ATTENDEE";
export const SET_QRCODE = "SET_QRCODE";
export const LOGOUT = "LOGOUT";
export const SET_ROLES = "SET_ROLES";
export const SET_USER_ID = "SET_USER_ID";

interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

interface SetRoleAction {
  type: typeof SET_ROLES;
  payload: string[];
}

interface SetAttendeeAction {
  type: typeof SET_ATTENDEE;
  payload: Attendee;
}

interface SetQRCodeAction {
  type: typeof SET_QRCODE;
  payload: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface SetUserIDAction {
  type: typeof SET_USER_ID;
  payload: string;
}

export type AuthActionTypes =
  | SetTokenAction
  | SetRoleAction
  | SetAttendeeAction
  | SetQRCodeAction
  | LogoutAction
  | SetUserID;

// Action Creators
export const setToken = (token: string): AuthActionTypes => ({
  type: SET_TOKEN,
  payload: token,
});

export const setUserID = (user_id: string): AuthActionTypes => ({
  type: SET_USER_ID,
  payload: user_id,
});

export const setRoles = (roles: string[]): AuthActionTypes => ({
  type: SET_ROLES,
  payload: roles,
});

export const setAttendee = (attendee: Attendee): AuthActionTypes => ({
  type: SET_ATTENDEE,
  payload: attendee,
});

export const setQRCode = (qrcode: string): AuthActionTypes => ({
  type: SET_QRCODE,
  payload: qrcode,
});

export const clearTokens = (): AuthActionTypes => ({
  type: LOGOUT,
});

// Thunk Actions
export const logout =
  (): ThunkAction<void, RootState, unknown, AuthActionTypes> =>
  async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      // Remove tokens from AsyncStorage
      await AsyncStorage.removeItem("token");
      // Dispatch action to clear tokens from Redux state
      dispatch(clearTokens());
    } catch (e) {
      console.error("Failed to log out:", e);
    }
  };
