import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteYouthThunk = createAsyncThunk(
  "youths/delete-youth",
  async (id: string, thunkAPI) => {
    try {
      const res = await api.delete(`/youths/delete-youth/${id}`);
      return res.data; // should return deleted youth info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "delete youth thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
