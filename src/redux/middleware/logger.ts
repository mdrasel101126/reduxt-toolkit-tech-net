import { Middleware } from "@reduxjs/toolkit";
export const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current State", store.getState());
  console.log("Action", action);
  next(action);
  console.log("Updated State", store.getState());
};
