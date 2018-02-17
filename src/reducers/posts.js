import {
  GET_ALL_POSTS
} from 'actions/constants';

const posts = (state = [], action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
}

const post = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default posts;
