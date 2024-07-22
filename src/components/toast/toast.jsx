"use client"
import React from "react";
import { toast, Toaster } from "react-hot-toast";

export const notifySuccess = (msg) => {
  toast.success(msg, {
    theme: "colored",
    position: "top-center",
    // autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return <Toaster />;
};

export const notifyFailure = (msg) => {
  toast.error(msg, {
    theme: "colored",
    autoClose: 5000,
    position: "top-center",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return <Toaster />;
};

export const notifyAutoLogout = (msg) => {
  toast.warning("session timeout", {
    theme: "colored",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return <Toaster />;
};

export const notifyPasswordNotMatch = (msg) => {
  toast.warning("Password, don't match", {
    theme: "colored",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return <Toaster />;
};
