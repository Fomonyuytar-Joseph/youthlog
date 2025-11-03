import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { addYouthThunk } from "../thunks/add-youth.thunk";
import { YouthsResponseType } from "@/types/members.type";

interface addYouthState {
  youth: YouthsResponseType | null;
  requestResponse: ApiRequestDataType;
}

const initialState: addYouthState = {
  youth: {} as YouthsResponseType,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const addYouthSlice = createSlice({
  name: "addYouth",
  initialState,
  reducers: {
    resetAddYouthState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addYouthThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(addYouthThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.youth = action.payload; 
      })
      .addCase(addYouthThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
      });
  },
});

export const { resetAddYouthState } = addYouthSlice.actions;
export default addYouthSlice.reducer;
