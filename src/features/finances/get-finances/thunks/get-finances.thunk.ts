import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFinancesThunk = createAsyncThunk(
  "finances/get-finances",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/finances/get-finances");
      return res.data; // should return finances info

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "finances thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
