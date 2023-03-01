import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

const initialState: IProductsObject[] = [];

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    setAllItems (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { setAllItems } = allItemsSlice.actions;
export const allItemsReducer = allItemsSlice.reducer;