import { createReducer } from "@reduxjs/toolkit";
import { loadUser, login, loginError, loginSuccess } from "redux/actions/auth";

const initialState: Iauth = {
  isAuthenticated: false,
  token: null,
  authenticating: false,
  authenticationError: [],

  user: {},
};

const authReducers = createReducer(initialState, {
  //Login Req
  [login.type]: (state) => {
    state.authenticating = true;
    state.authenticationError = [];
  },

  //login success
  [loginSuccess.type]: (state, action) => {
    state.authenticating = false;
    state.isAuthenticated = true;
    state.user = action.payload.data.data.login;
    state.authenticationError = [];
    localStorage.setItem(
      "v7auth",
      JSON.stringify(action.payload.data.data.login)
    );
  },

  //login failed
  [loginError.type]: (state, action) => {
    state.authenticating = false;
    state.authenticationError = action.payload;
  },

  //Load user
  [loadUser.type]: (state, action) => {
    state.isAuthenticated = true;
    state.user = action.payload;
  },
});

export default authReducers;
