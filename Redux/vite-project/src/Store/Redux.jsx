import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  initialAuthState: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.initialAuthState = true;
    },
    logout(state) {
      state.initialAuthState = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, authentication: authSlice.reducer },
});

export const CounterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
