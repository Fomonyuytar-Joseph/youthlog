import { ApiRequestDataType, ApiRequestStatus } from "@/types/api/api.types";
import { createSlice } from "@reduxjs/toolkit";
import { getFinancesThunk } from "../thunks/get-finances.thunk";
import { FinanceResponseType } from "@/types/finance.type";

interface GetFinancesState {
  finances: FinanceResponseType[] | null;
  requestResponse: ApiRequestDataType;
}

const initialState: GetFinancesState = {
  finances: [] as FinanceResponseType[],
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
        console.log("finances fetched:", action.payload);
        state.finances = action.payload; // assuming payload has finances
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
