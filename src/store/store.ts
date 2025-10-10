import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// middleware
import middlewareArray from "./middleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewareArray),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

