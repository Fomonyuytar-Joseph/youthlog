import api from "@/lib/axios";
import { AttendanceRequestType } from "@/types/attendance.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Example async request (GET)
export const addAttendanceThunk = createAsyncThunk(
  "attendance/add-attendance",
  async (attendances: AttendanceRequestType, thunkAPI) => {
    try {
      const res = await api.post("/attendance/add-attendance", {
        attendances,
      });
      return res.data; // should return attendances info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "attendance add thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
