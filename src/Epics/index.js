import {epic as counterEpic} from './CounterEpic'
import { combineEpics } from 'redux-observable';

export default combineEpics(
  counterEpic
);