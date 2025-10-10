import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Example async request (GET)
export const getExampleThunk = createAsyncThunk("example/fetchData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // console.log(response.data)
  return response.data;
});
