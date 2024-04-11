import { configureStore } from '@reduxjs/toolkit'
import stateReducer from "./state";

export default configureStore({
    reducer: stateReducer
})