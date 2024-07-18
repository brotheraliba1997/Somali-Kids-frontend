import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import { authAPI } from "./services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAPI } from "./services/userApi";
import { categoryAPI } from "./services/categoryAPI";

export const store = configureStore({
  reducer: {
    auth,
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware, userAPI.middleware, categoryAPI.middleware),
});
setupListeners(store.dispatch);
