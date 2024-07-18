import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../services/authApi";
import { userAPI } from "../services/userApi";

const user =
  typeof window !== "undefined"
    ? localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
    : null;

const tokens =
  typeof window !== "undefined"
    ? localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens"))
      : null
    : null;

const initialState = {
  user,
  tokens,
  isAdmin: user?.role == "admin" ? true : false,
  isParent: user?.role == "parent" ? true : false,
  isTeacher: user?.role == "teacher" ? true : false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens = null;
      localStorage.removeItem("tokens");
      localStorage.removeItem("user");
      // localStorage.removeItem("userName");
    },
    setLoading: (state, action) => {
      state.isLoadingUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authAPI.endpoints.loginUser.matchFulfilled,
        (state, { payload }) => {
          console.log(payload, "login");
          state.user = payload.user;
          state.isAdmin = payload.user.role == "admin";
          state.isParent = payload.user.role == "parent";
          state.isTeacher = payload.user.role == "teacher";
          state.tokens = payload.tokens;
          localStorage.setItem("user", JSON.stringify(payload.user));
          localStorage.setItem("tokens", JSON.stringify(payload.tokens)); // Corrected from 'tokens'
        }
      )

      .addMatcher(
        userAPI.endpoints.updateProfile.matchFulfilled,
        (state, { payload }) => {
          state.user = { ...state.user, ...payload };
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      )
      .addMatcher(authAPI.endpoints.loginUser.matchRejected, (state) => {
        state.auth = null;
      })

      .addMatcher(
        userAPI.endpoints.checkUserAuth.matchFulfilled,
        (state, { payload }) => {
          console.log("auth=>", payload);
          state.user = payload;
          state.isAdmin = payload.role == "admin";
          state.isParent = payload.role == "parent";
          state.isTeacher = payload.role == "teacher";
          localStorage.setItem("user", JSON.stringify(payload));
        }
      )
      .addMatcher(userAPI.endpoints.checkUserAuth.matchRejected, (state) => {
        state.user = null;
        state.tokens = null;
        localStorage.removeItem("tokens");
        localStorage.removeItem("user");
        // localStorage.removeItem("userName");
      });
  },
});

export const { logout, setLoading } = slice.actions;

export default slice.reducer;
