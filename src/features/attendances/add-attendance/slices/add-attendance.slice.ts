import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { addAttendanceThunk } from "../thunks/add-attendance.thunk";

interface addAttendanceState {
  count: number | string;

  requestResponse: ApiRequestDataType;
}

const initialState: addAttendanceState = {
  count: 0,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const addAttendanceSlice = createSlice({
  name: "addAttendance",
  initialState,
  reducers: {
    resetAddAttendanceState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAttendanceThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(addAttendanceThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.count = action.payload.count; 
      })
      .addCase(addAttendanceThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
      });
  },
});

export const { resetAddAttendanceState } = addAttendanceSlice.actions;
export default addAttendanceSlice.reducer;
