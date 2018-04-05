import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/RootReducer";

const middleware = [thunk];

const initialState = {};

const Store = createStore(
    RootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export default Store;