import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { getExampleThunk } from "../thunks/example.thunk";

interface ExampleState {
  count: number;
  requestResponse: ApiRequestDataType;
}

const initialState: ExampleState = {
  count: 0,
   requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  }
};


const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExampleThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(getExampleThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
      })
      .addCase(getExampleThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
      });
  },
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
