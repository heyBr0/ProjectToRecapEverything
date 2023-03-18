import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

/* type CounterAction<T> = {
     payload?: T;
  }; */

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.count += 1;
    },
    decrement: (state: CounterState) => {
      state.count -= 1;
    },
    reset: (state: CounterState) => {
      state.count = 0;
    },
    incrementByAmount: (state: CounterState, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
