import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { getAttendancesThunk } from "../thunks/get-attendances.thunks";

interface GetAttendanceState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attendances: any;
  requestResponse: ApiRequestDataType;
}

const initialState: GetAttendanceState = {
  attendances: [],
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const getAttendancesSlice = createSlice({
  name: "getAttendances",
  initialState,
  reducers: {
    resetGetAttendancesState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAttendancesThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(getAttendancesThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        console.log("attendances fetched:", action.payload);
        state.attendances = action.payload; // assuming payload has attendances
      })
      .addCase(getAttendancesThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetGetAttendancesState } = getAttendancesSlice.actions;
export default getAttendancesSlice.reducer;
