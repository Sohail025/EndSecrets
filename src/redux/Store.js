import { configureStore } from "@reduxjs/toolkit";
import LoginSliceHandler from "./Features/LoginSlice";

const store = configureStore({
  reducer: {
    loginSlice: LoginSliceHandler,
  },
});
export { store };
