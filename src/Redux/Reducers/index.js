import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {LOGOUT} from '../Actions/types';
import RegisterReducer from './RegisterReducer';
const appReducer = combineReducers({

  RegisterReducer: RegisterReducer,
  
});

export default rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
