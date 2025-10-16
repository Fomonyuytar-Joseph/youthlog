import exampleSlice from "@/features/example/slices/example.slice";
import loginSlice from "@/features/auth/login/slices/login.slice";

const rootReducer = {
  exampleSlice,
  loginSlice,
};

export default rootReducer;
