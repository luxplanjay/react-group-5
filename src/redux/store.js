import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import postsReducer from './posts/postsReducer';

// Middleware
import ReduxThunk from 'redux-thunk';
import stateValidator from './middleware/state-validation';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const middleware = [ReduxThunk, stateValidator];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
