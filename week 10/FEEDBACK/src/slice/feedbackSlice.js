import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load from localStorage (if available)
const storedFeedback = JSON.parse(localStorage.getItem("feedbackEntries")) || [];

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    entries: storedFeedback, // use saved entries if they exist
  },
  reducers: {
    addFeedback: (state, action) => {
      state.entries.push(action.payload);
      // 🔹 Save to localStorage whenever new feedback is added
      localStorage.setItem("feedbackEntries", JSON.stringify(state.entries));
    },
    clearFeedback: (state) => {
      state.entries = [];
      localStorage.removeItem("feedbackEntries");
    },
  },
});

export const { addFeedback, clearFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;