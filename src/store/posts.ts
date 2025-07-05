import { createSlice } from '@reduxjs/toolkit';
import type { PostsState } from '../types/board';

const initialState: PostsState = {
  posts: [],
  loading: false,
};

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    deletePostsById(state, action) {
      state.posts = state.posts.filter(
        (post) => !action.payload.includes(post.id)
      );
    },
    insertPost(state, action){
      state.posts.unshift(action.payload);
    }
  },
});

export const { setPosts, setLoading, deletePostsById, insertPost } = posts.actions;
export default posts.reducer;


