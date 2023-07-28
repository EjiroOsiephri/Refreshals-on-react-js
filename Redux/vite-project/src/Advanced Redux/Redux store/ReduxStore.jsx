import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./CartRedux";

const store = configureStore({
  reducer: { ui: authSlice.reducer },
});

export default store;
