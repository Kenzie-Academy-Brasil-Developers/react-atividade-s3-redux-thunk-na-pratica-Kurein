import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./modules/user/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ user: userReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
