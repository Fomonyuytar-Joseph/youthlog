import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { YouthsResponseType } from "@/types/members.type";
import { deleteYouthThunk } from "../thunks/delete-youth.thunk";

interface deleteYouthState {
  youth: YouthsResponseType | null;
  requestResponse: ApiRequestDataType;
}

const initialState: deleteYouthState = {
  youth: {} as YouthsResponseType,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const deleteYouthSlice = createSlice({
  name: "deleteYouth",
  initialState,
  reducers: {
    resetDeleteYouthState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteYouthThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(deleteYouthThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.youth = action.payload; // assuming payload has been deleted
      })
      .addCase(deleteYouthThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetDeleteYouthState } = deleteYouthSlice.actions;
export default deleteYouthSlice.reducer;
