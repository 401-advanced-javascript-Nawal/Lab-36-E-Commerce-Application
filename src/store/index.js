import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import action from './actions.js';

// combine all reducer in one JS File 
let reducers = combineReducers({ action });

const store = () => {
    return createStore(reducers,composeWithDevTools());
}

export default store;