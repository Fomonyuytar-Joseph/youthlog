import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { getYouthsThunk } from "../thunks/get-youths.thunk";
import { YouthsResponseType } from "@/types/members.type";

interface GetYouthsState {
  youths:  YouthsResponseType[] | null;
  requestResponse: ApiRequestDataType;
}

const initialState: GetYouthsState = {
  youths: [] as YouthsResponseType[],
   requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  }
};


const getYouthsSlice = createSlice({
  name: "getYouths",
  initialState,
  reducers: {
    resetGetYouthState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getYouthsThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(getYouthsThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        console.log("youths fetched:", action.payload);
        state.youths = action.payload; // assuming payload has youths
      })
      .addCase(getYouthsThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse)
      });
  },
});

export const { resetGetYouthState } = getYouthsSlice.actions;
export default getYouthsSlice.reducer;
