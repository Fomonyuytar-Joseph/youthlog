import api from "@/lib/axios";
import { GetFinanceRequestType } from "@/types/finance.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFinancesThunk = createAsyncThunk(
  "finances/get-finances",
  async (data: GetFinanceRequestType, thunkAPI) => {
    try {
      const { year, month } = data;
      const res = await api.get(`/finances/get-finances/?year=${year}&month=${month}`);
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
