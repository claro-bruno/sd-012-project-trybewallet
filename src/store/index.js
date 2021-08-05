// import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import * as reducers from '../reducers';

// const rootReducer = combineReducers({ reducers });
// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
