// Please note that this gist follows the repo available at: https://github.com/delasign/react-redux-tutorial
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;