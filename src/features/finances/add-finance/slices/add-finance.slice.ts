import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { addFinanceThunk } from "../thunks/add-finance.thunk";
import { FinanceResponseType } from "@/types/finance.type";

interface AddFinanceState {
  finance: FinanceResponseType | null;
  requestResponse: ApiRequestDataType;
}

const initialState: AddFinanceState = {
  finance:{} as FinanceResponseType,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const addFinanceSlice = createSlice({
  name: "addFinance",
  initialState,
  reducers: {
    resetAddFinanceState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFinanceThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(addFinanceThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        console.log("finance added:", action.payload);
        state.finance = action.payload; // assuming payload has youths
      })
      .addCase(addFinanceThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetAddFinanceState } = addFinanceSlice.actions;
export default addFinanceSlice.reducer;
