import exampleSlice from "@/features/example/slices/example.slice";
import loginSlice from "@/features/auth/login/slices/login.slice";
import getYouthsSlice from "@/features/youths/get-youths/slices/get-youths.slice";
const rootReducer = {
  exampleSlice,
  loginSlice,
  getYouthsSlice,
};

export default rootReducer;
