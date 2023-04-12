import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from "../reducers";
// import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;