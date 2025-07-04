import { createSlice } from '@reduxjs/toolkit';

interface Post {
  id: number;
  title: string;
  views: number;
  body : string;
  reactions : {
    likes : number,
    dislikes : number
  }
}

interface PostsState {
  posts: Post[];
  loading: boolean;
}

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
  },
});

export const { setPosts, setLoading } = posts.actions;
export default posts.reducer;


