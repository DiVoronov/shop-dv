import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { IProductsObject } from "../api/shop.types";

interface IUser {
  email: string
  password: string
};

const initialState: IUser = {
  email: '',
  password: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser (state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      return state;
    },
    removeUser (state) {
      state.email = '';
      state.password = '';
      return state;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;