import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    },
    setActiveUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload) {
          user.active = true;
        } else {
          user.active = false;
        }
      });
    },
    setActiveUserPoints: (state, action) => {
      const activeUser = state.value.find(
        (user) => user.id === action.payload.id
      );
      activeUser.points += action.payload.points;
    },
  },
});

export const { setUsers, setActiveUser } = usersSlice.actions;

export default usersSlice.reducer;
