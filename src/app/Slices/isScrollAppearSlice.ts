import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const isScrollAppearSlice = createSlice({
  name: "isScrollAppear",
  initialState: false,
  reducers: {
    setScrollAppear (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setScrollAppear } = isScrollAppearSlice.actions;
export const isScrollAppearReducer = isScrollAppearSlice.reducer;