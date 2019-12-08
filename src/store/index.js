import { createStore } from 'redux'
import rootReducer from './reducerActions';

let reduxDevTools;

if (process.env.NODE_ENV === 'development') {
  reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  rootReducer,
  reduxDevTools,
)

export default store;
