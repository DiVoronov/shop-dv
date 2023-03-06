import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

const initialState: IProductsObject | null = null;

const currentDetailedItemSlice = createSlice({
  name: "currentDetailedItem",
  initialState,
  reducers: {
    setCurrentDetailedPage (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setCurrentDetailedPage } = currentDetailedItemSlice.actions;
export const currentDetailedItemReducer = currentDetailedItemSlice.reducer;