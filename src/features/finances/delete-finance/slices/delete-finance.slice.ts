import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { deleteFinanceThunk } from "../thunks/delete-finance.thunk";
import { FinanceResponseType } from "@/types/finance.type";

interface deleteFinanceState {
  finance: FinanceResponseType | null;
  requestResponse: ApiRequestDataType;
}

const initialState: deleteFinanceState = {
  finance: {} as FinanceResponseType,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const deleteFinanceSlice = createSlice({
  name: "deleteFinance",
  initialState,
  reducers: {
    resetDeleteFinanceState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteFinanceThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(deleteFinanceThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.finance = action.payload; // assuming payload has been deleted
      })
      .addCase(deleteFinanceThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetDeleteFinanceState } = deleteFinanceSlice.actions;
export default deleteFinanceSlice.reducer;
