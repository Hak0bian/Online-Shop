import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
    Products: productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))