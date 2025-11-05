import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAttendancesThunk = createAsyncThunk(
  "attendance/get-attendances",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/attendance/get-attendances");
      console.log(res.data, "attendances thunk");
      return res.data; // should return attendance info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "attendances thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
