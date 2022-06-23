import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from "../reducers";

// Saga Middleware Creation
const sagaMiddleware = createSagaMiddleware();

// Add new middleware here
const customMiddleWare = [sagaMiddleware];

//The store for our app
const store = configureStore({
  reducer: rootReducer,
  middleware: [...customMiddleWare],
  devTools: process.env.NODE_ENV === "development",
});

sagaMiddleware.run(rootSaga);

export default store;
