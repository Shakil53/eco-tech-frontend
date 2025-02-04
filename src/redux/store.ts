import { configureStore } from "@reduxjs/toolkit";
// import { authApi } from "./services/authServices";
import userReducer from "../redux/slices/user/userSlice";
import popUpReducer from "./slices/others/popUpSlice";
// import loadingReducer from "./slices/others/loadingSlice";
// import { paymentApi } from "./services/paymentServices";
import loadingReducer from "./slices/others/loadingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    popUp: popUpReducer,
    baseLoader: loadingReducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    //   .concat(authApi.middleware)
    //   .concat(paymentApi.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
