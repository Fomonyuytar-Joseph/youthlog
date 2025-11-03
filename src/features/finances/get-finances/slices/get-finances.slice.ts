import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { getFinancesThunk } from "../thunks/get-finances.thunk";
import { FinanceResponseType } from "@/types/finance.type";

interface GetFinancesState {
  finances: FinanceResponseType[] | null;
  totalIncome: number;
  totalExpense: number;
  requestResponse: ApiRequestDataType;
}

const initialState: GetFinancesState = {
  finances: [] as FinanceResponseType[],
  totalIncome: 0,
  totalExpense: 0,
  requestResponse: {
    status: ApiRequestStatus.IDLE,
    data: [],
  },
};

const getFinancesSlice = createSlice({
  name: "getFinances",
  initialState,
  reducers: {
    resetGetFinanceState(state) {
      state.requestResponse.status = ApiRequestStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFinancesThunk.pending, (state) => {
        state.requestResponse.status = ApiRequestStatus.PENDING;
      })
      .addCase(getFinancesThunk.fulfilled, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.FULFILLED;
        state.requestResponse.data = action.payload;
        state.finances = action.payload.finances; 
        state.totalIncome = action.payload.totalIncome;
        state.totalExpense = action.payload.totalExpense;
      })
      .addCase(getFinancesThunk.rejected, (state, action) => {
        state.requestResponse.status = ApiRequestStatus.REJECTED;
        state.requestResponse.error = action.error ?? "Something went wrong";
        console.log(state.requestResponse);
      });
  },
});

export const { resetGetFinanceState } = getFinancesSlice.actions;
export default getFinancesSlice.reducer;
