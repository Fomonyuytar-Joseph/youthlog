import { Middleware } from "redux";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const returnValue = next(action);
  // INFO: Disable this to see logs in development mode because NODE_ENV is always production, smh
  if (process.env.NODE_ENV !== "production") {
    console.log("The action: ", action);
    console.log("The new state: ", store.getState());
    console.groupEnd();
  }
  return returnValue;
};

export default loggerMiddleware;
