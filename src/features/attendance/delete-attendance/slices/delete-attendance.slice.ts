import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteAttendanceThunk } from "../thunks/delete-attendance.thunk";

interface deleteAttendanceState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attendance: any;
  requestResponse: ApiRequestDataType;
}

const initialState: deleteAttendanceState = {
  attendance: {},
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const deleteAttendanceSlice = createSlice({
  name: "deleteAttendance",
  initialState,
  reducers: {
    resetDeleteAttendanceState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteAttendanceThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(deleteAttendanceThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.attendance = action.payload; // assuming payload has been deleted
      })
      .addCase(deleteAttendanceThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetDeleteAttendanceState } = deleteAttendanceSlice.actions;
export default deleteAttendanceSlice.reducer;
