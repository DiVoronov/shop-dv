import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

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