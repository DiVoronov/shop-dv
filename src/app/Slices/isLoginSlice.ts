import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    setLoginStatus (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setLoginStatus } = isLoginSlice.actions;
export const isLoginReducer = isLoginSlice.reducer;