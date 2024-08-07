import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import { authAPI } from "./services/authApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAPI } from "./services/userApi";
import { categoryAPI } from "./services/categoryAPI";
import { LanguageAPI } from "./services/languageAPI";
import { VideoUploadAPI } from "./services/videoAPI";
import { ProgramAPI } from "./services/programAPI";
import { PackageAPI } from "./services/packageAPI";
import { ContactAPI } from "./services/contactAPI";

export const store = configureStore({
  reducer: {
    auth,
    [userAPI.reducerPath]: userAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [categoryAPI.reducerPath]: categoryAPI.reducer,
    [LanguageAPI.reducerPath]: LanguageAPI.reducer,
    [VideoUploadAPI.reducerPath]: VideoUploadAPI.reducer,
    [ProgramAPI.reducerPath]: ProgramAPI.reducer,
    [PackageAPI.reducerPath]: PackageAPI.reducer,
    [ContactAPI.reducerPath]: ContactAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authAPI.middleware,
      userAPI.middleware,
      categoryAPI.middleware,
      LanguageAPI.middleware,
      VideoUploadAPI.middleware,
      ProgramAPI.middleware,
      PackageAPI.middleware,
      ContactAPI.middleware
      
    ),
});
setupListeners(store.dispatch);
