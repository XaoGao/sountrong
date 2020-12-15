import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from './auth-reducer'
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  auth: authReducer
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware)
  // other store enhancers if any
);

let store = createStore(reducers, enhancer);

export default store;