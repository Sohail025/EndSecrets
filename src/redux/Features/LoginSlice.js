import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState: {
    status: 0,
  },
  reducers: {
    StatusChanger: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { StatusChanger } = loginSlice.actions;
export default loginSlice.reducer;
