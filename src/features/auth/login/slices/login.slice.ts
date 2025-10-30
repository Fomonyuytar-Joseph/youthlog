import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/login.thunk";

interface ExampleState {
  user: { email: string } | null;
  requestResponse: ApiRequestDataType;
}

const initialState: ExampleState = {
  user: null,
   requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  }
};


const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetAuthReq(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        console.log("User logged in:", action.payload);
        state.user = { email: action.payload.email }; // assuming payload has email
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse)
      });
  },
});

export const { resetAuthReq } = loginSlice.actions;
export default loginSlice.reducer;
