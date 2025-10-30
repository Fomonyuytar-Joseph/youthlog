import api from "@/lib/axios";
import { FinanceRequestType } from "@/types/finance.type";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const addFinanceThunk = createAsyncThunk(
  "finances/add-finance",
  async (financeData: FinanceRequestType, thunkAPI) => {
    try {
      const res = await api.post("/finances/add-finance", {
      title: financeData.title,
      amount: Number(financeData.amount),
      date: new Date(financeData.date).toISOString(),
      type: financeData.type,
      });
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
