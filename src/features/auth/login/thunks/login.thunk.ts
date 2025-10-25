import api from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Example async request (GET)
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      console.log(res,'res')
      return res.data; // should return user info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err,'thunk error')
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
