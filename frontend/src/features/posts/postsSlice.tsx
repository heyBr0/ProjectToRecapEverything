import { createSlice } from "@reduxjs/toolkit";

type Post = {
  id: string;
  title: string;
  content: string;
};

type RootState = {
  posts: Post[];
};

const initialState: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Redux is a good thing",
  },
  {
    id: "2",
    title: "Slices",
    content: "Very tasty pizza slices",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action){
        state.push(action.payload)
    }
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer;
