import { createReducer } from "@reduxjs/toolkit";
import {
  loadUser,
  login,
  loginError,
  loginSuccess,
  logout,
  signup,
  signupError,
  signupSuccess,
} from "redux/actions/auth";

const initialState: Iauth = {
  isAuthenticated: false,
  token: null,
  authenticating: false,
  authenticationError: [],

  user: {},

  signing: false,
  signupError: [],
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

  //Logout
  [logout.type]: (state) => {
    state.isAuthenticated = false;
    state.user = {};
    localStorage.removeItem("v7auth");
  },

  //Signup
  [signup.type]: (state) => {
    state.signing = true;
  },

  //Signup success
  [signupSuccess.type]: (state, action) => {
    state.signing = false;
    state.user = action.payload.data.data.register;
    state.signupError = [];
    state.isAuthenticated = true;
    localStorage.setItem(
      "v7auth",
      JSON.stringify(action.payload.data.data.register)
    );
  },

  //Signup Error
  [signupError.type]: (state, action) => {
    state.signing = false;
    state.signupError = action.payload;
  },
});

export default authReducers;
