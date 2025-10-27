import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { addYouthThunk } from "../thunks/add-youth.thunk";
import { YouthsResponseType } from "@/types/members.type";

interface GetYouthsState {
  youth: YouthsResponseType | null;
  requestResponse: ApiRequestDataType;
}

const initialState: GetYouthsState = {
  youth: {} as YouthsResponseType,
   requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  }
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
        console.log("youth added:", action.payload);
        state.youth = action.payload; // assuming payload has been added
      })
      .addCase(addYouthThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse)
      });
  },
});

export const { resetAddYouthState } = addYouthSlice.actions;
export default addYouthSlice.reducer;
