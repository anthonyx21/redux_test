import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import {createEpicMiddleware,combineEpics} from 'redux-observable';


const incrementIfOddEpic = (action$, store) =>
action$.ofType("INCREMENT_IF_ODD")
  // .filter(() => store.getState().counter % 2 === 1)
  .map(() => increment());

const increment = () => ({ type: "INCREMENT_BY_TWO" });


export const epic = combineEpics(incrementIfOddEpic);