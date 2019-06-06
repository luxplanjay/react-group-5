import { combineReducers } from 'redux';
import { ActionType } from './postsActions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_POSTS:
      return payload;

    case ActionType.DELETE_POST:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const tagReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.CHANGE_TAG:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  selectedTag: tagReducer,
});
