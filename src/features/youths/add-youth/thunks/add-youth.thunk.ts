import api from "@/lib/axios";
import { YouthRequestType } from "@/types/members.type";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Example async request (GET)
export const addYouthThunk = createAsyncThunk(
  "youths/add-youth",
  async (youth: YouthRequestType, thunkAPI) => {
    try {
      const res = await api.post("/youths/add-youth", {
        name: youth.name,
        gender: youth.gender,
        phone: youth.phone,
        role: youth.role,
        occupation: youth.occupation,
        address: youth.address,
      });
      console.log(res, "youths added res");
      return res.data; // should return youth info
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err, "youth add thunk error");
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message
      );
    }
  }
);
