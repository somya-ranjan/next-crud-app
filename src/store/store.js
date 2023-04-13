import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { employeeRootReducer } from "./reducers";

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();

// create root reducer
const rootReducer = {
  employee: employeeRootReducer,
};

// setup store
const Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENV_STATUS !== "production",
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default Store;
