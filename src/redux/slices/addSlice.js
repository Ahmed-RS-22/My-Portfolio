import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addItem: (state, action) => {
        alert("hello")
        state.value =state.value + action.payload.min
    },
  },
});

export const { addItem } = addSlice.actions;
export default addSlice.reducer;
