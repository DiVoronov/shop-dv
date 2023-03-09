import React from "react";
import { createSlice } from "@reduxjs/toolkit";

interface IUserInfo {
  email: string
  creationTime: string
  lastSignInTime: string
}

const initialState: IUserInfo = {
  email: '',
  creationTime: '',
  lastSignInTime: '',
};

const userInfoProfileSlice = createSlice({
  name: "userInfoProfile",
  initialState,
  reducers: {
    updateUserInfo (state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const { updateUserInfo } = userInfoProfileSlice.actions;
export const userInfoProfileReducer = userInfoProfileSlice.reducer;