import { createAction } from "@reduxjs/toolkit";

//For logging in
export const login = createAction("LOGIN/REQ");
export const loginSuccess = createAction<object>("LOGIN_SUCCESS/RES");
export const loginError = createAction<object>("LOGIN_FAIL/RES");

//To load user data from local
export const loadUser = createAction<object>("LOAD_USER");

//To logout user
export const logout = createAction("LOGOUT");

//FOr sign up
export const signup = createAction("SIGNUP/REQ");
export const signupSuccess = createAction<object>("SIGNUP_SUCCESS/RES");
export const signupError = createAction<object>("SIGNUP_FAILED/RES");
