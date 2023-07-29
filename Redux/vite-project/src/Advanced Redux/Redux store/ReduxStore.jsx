import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./CartRedux";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: { ui: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;
