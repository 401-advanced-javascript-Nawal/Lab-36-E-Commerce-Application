import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import catAct from './categories-actions.js';
import proAct from './products-actions.js';

// combine all reducer in one JS File 
let reducers = combineReducers({ catAct , proAct });

const store = () => {
  return createStore(reducers,composeWithDevTools());
};

export default store();