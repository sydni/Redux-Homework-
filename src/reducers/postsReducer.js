import { ActionTypes } from '../actions';


const PostsReducer = (state = { all: [], currentPost: {} }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, currentPost: state.currentPost };
    case ActionTypes.FETCH_POST:
      return { all: state.all, currentPost: action.payload };
    // case ActionTypes.CREATE_POST:
    //   return state - 1;
    // case ActionTypes.UPDATE_POST:
    //   return state - 1;
    // case ActionTypes.DELETE_POST:
    //   return state - 1;
    default:
      return state;
  }
};

export default PostsReducer;
