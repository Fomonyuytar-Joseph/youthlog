import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteFinanceThunk = createAsyncThunk(
  "finances/delete-finance",
  async (id: string, thunkAPI) => {
    try {
      const res = await api.delete(`/finances/delete-finance/${id}`);
      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "delete finance thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
