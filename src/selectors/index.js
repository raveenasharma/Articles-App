import { createSelector } from 'reselect';

export const getPosts = (state) => state.posts.filter(post => post);
