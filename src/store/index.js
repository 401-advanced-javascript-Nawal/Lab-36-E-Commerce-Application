import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import catPro from './actions.js';

// combine all reducer in one JS File 
let reducers = combineReducers({ catPro });

const store = () => {
  return createStore(reducers,composeWithDevTools());
};

export default store();