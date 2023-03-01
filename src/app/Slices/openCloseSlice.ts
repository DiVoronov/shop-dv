import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export interface IOpenCloseAnchors {
  anchorEl: boolean,
  mobileMoreAnchorEl: boolean,
  mobileNavListAnchorEl: boolean,
};

const initialState: IOpenCloseAnchors = {
  anchorEl: false,
  mobileMoreAnchorEl: false,
  mobileNavListAnchorEl: false,
};

const openCloseSlice = createSlice({
  name: "openClose",
  initialState,
  reducers: {
    setAnchorEl (state, action) {
      state.anchorEl = action.payload;
      return state;
    },
    setMobileMoreAnchorEl (state, action) {
      state.mobileMoreAnchorEl = action.payload;
      return state;
    },
    setMobileNavListAnchorEl (state, action) {
      state.mobileNavListAnchorEl = action.payload;
      return state;
    },
  }
});

export const { setAnchorEl, setMobileMoreAnchorEl, setMobileNavListAnchorEl } = openCloseSlice.actions;
export const openCloseReducer = openCloseSlice.reducer;