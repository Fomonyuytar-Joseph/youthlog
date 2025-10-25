import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Example async request (GET)
export const getYouthsThunk = createAsyncThunk(
  "youths/get-youths",
  async (
    _,
    thunkAPI
  ) => {
    try {
      const res = await api.get("/youths/get-youths");
      console.log(res,'youths res')
      return res.data; // should return youths info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err,'youths thunk error')
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
