import exampleSlice from "@/features/example/slices/example.slice";
import loginSlice from "@/features/auth/login/slices/login.slice";
import getYouthsSlice from "@/features/youths/get-youths/slices/get-youths.slice";
import addYouthSlice from "@/features/youths/add-youth/slices/add-youth.slice";
import deleteYouthSlice from "@/features/youths/delete-youth/slices/delete-youth.slice";

const rootReducer = {
  exampleSlice,
  loginSlice,
  getYouthsSlice,
  addYouthSlice,
  deleteYouthSlice,
};

export default rootReducer;
