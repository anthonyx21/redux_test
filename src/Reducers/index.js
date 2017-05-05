// ./src/reducers/index.js
import { combineReducers } from 'redux';
import counters from './CounterReducers'

export default combineReducers({
  counters: counters,
  // More reducers if there are
  // can go here
});