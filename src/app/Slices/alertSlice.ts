import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: false,
  reducers: {
    setAlert (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;