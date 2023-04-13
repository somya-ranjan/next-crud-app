import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  errorMsg: "",
  successMsg: "",
};
const employeeSlice = createSlice({
  name: "createEmployee",
  initialState,
  reducers: {
    createEmployeeStart: (state) => {
      state.isLoading = true;
    },
    createEmployeeSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    createEmployeeFailed: (state, { payload }) => {
      state.isLoading = false;
      state.errorMsg = payload;
    },
  },
});

export const {
  createEmployeeStart,
  createEmployeeSuccess,
  createEmployeeFailed,
} = employeeSlice.actions;
export const createEmployeeReducer = employeeSlice.reducer;
