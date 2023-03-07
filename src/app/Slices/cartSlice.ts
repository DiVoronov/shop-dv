import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

const myStorage = window.localStorage;
const cartFromLocalStorage = myStorage.getItem('initialState');
const initialState: IProductsObject[] = (cartFromLocalStorage && JSON.parse(cartFromLocalStorage).length !== 0) ? [ ...JSON.parse(cartFromLocalStorage) ] : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart (state, action) {
      myStorage.length !== 0 && myStorage.removeItem('initialState');

      (!state.find( item => item.id === action.payload.id ))
      &&
      state.push(action.payload);

      myStorage.setItem('initialState', JSON.stringify(state));

      return state;
    },
    removeFromCart (state, action) {
      const myStorageAfterRefresh = myStorage.getItem('initialState');
      let marker = false;
      myStorage.length !== 0 ? myStorage.removeItem('initialState') : marker = true;

      const index = state.findIndex( item => item.id === action.payload);
      state.splice(index, 1);
      state.length && myStorageAfterRefresh && marker && myStorage.setItem('initialState', myStorageAfterRefresh)
      myStorage.setItem('initialState', JSON.stringify(state));

      return state;
    },
    updateCart (state, action) {
      state = action.payload;
      return state;
    }
    
  }
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;