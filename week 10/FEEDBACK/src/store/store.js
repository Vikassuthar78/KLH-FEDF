import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../slice/feedbackSlice.js";

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

//configstore() automatically sets up the Redux dev tools