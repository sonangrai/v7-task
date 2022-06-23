import { createReducer } from "@reduxjs/toolkit";

const initialState: Iauth = {
  isAuthenticated: false,
  token: null,
  authenticating: false,
  authenticationError: {},

  user: {},
};

const authReducers = createReducer(initialState, {});

export default authReducers;
