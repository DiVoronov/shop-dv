import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const openCloseFiltersSlice = createSlice({
  name: "openCloseFilters",
  initialState: false,
  reducers: {
    setOpenCloseFiltersStatus (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setOpenCloseFiltersStatus } = openCloseFiltersSlice.actions;
export const openCloseFiltersReducer = openCloseFiltersSlice.reducer;