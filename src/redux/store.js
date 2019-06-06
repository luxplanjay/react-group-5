import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from './timer/timerReducer';
import postsReducer from './posts/postsReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
