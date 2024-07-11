import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import { authAPI } from "./services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    auth,
    

    [authAPI.reducerPath]: authAPI.reducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authAPI.middleware,
      
    ),
});
setupListeners(store.dispatch);
