import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const noResponseSlice = createSlice({
  name: "noResponse",
  initialState: false,
  reducers: {
    setNoResponse (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setNoResponse } = noResponseSlice.actions;
export const noResponseReducer = noResponseSlice.reducer;