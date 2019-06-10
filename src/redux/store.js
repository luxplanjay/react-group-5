import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import timerReducer from './timer/timerReducer';
import postsReducer from './posts/postsReducer';

// Middleware
// import logger from './middleware/logger';
import logger from 'redux-logger';
import throttle from './middleware/throttle';
import stateValidator from './middleware/state-validation';
import analytics from './middleware/analytics';

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const middleware = [throttle, logger, analytics, stateValidator];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));
// (reducer, persState, enhancer)
// (reducer, enhancer)
// action -> [throttle, logger, stateValidator] - reducers

export default store;
