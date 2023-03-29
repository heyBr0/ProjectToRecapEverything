import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
};
type RootState = {
  users: User[];
};

const initialState: User[] = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Samaraki Tapusoa" },
  { id: "2", name: "Mister Trainer" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
