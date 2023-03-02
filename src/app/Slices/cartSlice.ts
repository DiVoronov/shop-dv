import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

const initialState: IProductsObject[] = [];
const myStorage = window.localStorage;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart (state, action) {
      myStorage.length !== 0 && myStorage.removeItem('initialState');

      (!state.find( item => item.id === action.payload.id ))
      &&
      state.push(action.payload);

      myStorage.setItem('initialState', JSON.stringify(state))
      console.log(state)

      return state;
    },
    removeFromCart (state, action) {
      const myStorageAfterRefresh = myStorage.getItem('initialState');
      let marker = false;
      myStorage.length !== 0 ? myStorage.removeItem('initialState') : marker = true;

      const index = state.findIndex( item => item.id === action.payload);
      state.splice(index, 1);
      console.log(state)
      state.length && myStorageAfterRefresh && marker && myStorage.setItem('initialState', myStorageAfterRefresh)
      myStorage.setItem('initialState', JSON.stringify(state))

      return state;
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;