import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import stateReducer from "./state";

const store =  configureStore({
    reducer: stateReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;