// ./src/store/configureStore.js
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import rootEpic from '../Epics';
import {createEpicMiddleware,combineEpics} from 'redux-observable';
import incrementIfOddEpic from '../Epics/CounterEpic'
import 'rxjs';

const increment = () => ({ type: "INCREMENT" });
// const incrementIfOddEpic = (action$, store) =>
//   action$.ofType("INCREMENT_IF_ODD")
//     .filter(() => store.getState().counter % 2 === 1)
//     .map(() => increment());

// const rootEpic = combineEpics(incrementIfOddEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);


export default function configureStore() {
  // const epicMiddleware = createEpicMiddleware(combineEpics(incrementIfOddEpic));
  return createStore(rootReducer, applyMiddleware(epicMiddleware));
}