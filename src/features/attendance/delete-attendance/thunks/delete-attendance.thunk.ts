import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAttendanceThunk = createAsyncThunk(
  "attendance/delete-attendance",
  async (id: string, thunkAPI) => {
    try {
      const res = await api.delete(`/attendance/delete-attendance/${id}`);
      return res.data; // should return deleted attendance info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "delete attendance thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
