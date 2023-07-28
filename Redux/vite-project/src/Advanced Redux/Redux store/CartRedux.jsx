import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  showCart: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice;
