import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

type ReactionKey = "thumbsUp" | "wow" | "heart" | "rocket" | "coffee";
interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  date: string;
  reactions: {
    [key in ReactionKey]: number;
  };
}

type RootState = {
  posts: Post[];
};
const initialState: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Redux is a good thing",
    userId: "0",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices",
    content: "Very tasty pizza slices",
    userId: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(
        title: string,
        content: string,
        userId: string
      ): { payload: Post } {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionKey }>
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
