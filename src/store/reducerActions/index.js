import { combineReducers } from 'redux';
import { userReducer } from './user';
import { docsReducer } from './docs';

const rootReducer = combineReducers({
  userReducer,
  docsReducer,
})

export default rootReducer;