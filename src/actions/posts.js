import Api from 'api';
import {
  GET_ALL_POSTS
} from 'actions/constants';

export const getAllPosts = () => (dispatch) => {
   Api.getPosts()
    .then(posts => {
      dispatch(getAllPostsAction(posts));
    });
}

const getAllPostsAction = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}
