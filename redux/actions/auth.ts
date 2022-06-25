import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN/REQ");
export const loginSuccess = createAction<object>("LOGIN_SUCCESS/RES");
export const loginError = createAction<object>("LOGIN_FAIL/RES");
