import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  errorMsg: "",
  allEmployeeList: [],
};
const employeeSlice = createSlice({
  name: "getAllEmployee",
  initialState,
  reducers: {
    getEmployeeStart: (state) => {
      state.isLoading = true;
    },
    getEmployeeSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.allEmployeeList = payload;
    },
    getEmployeeFailed: (state, { payload }) => {
      state.isLoading = false;
      state.errorMsg = payload;
      state.allEmployeeList = [];
    },
  },
});

export const { getEmployeeStart, getEmployeeSuccess, getEmployeeFailed } =
  employeeSlice.actions;
export const getEmployeeReducer = employeeSlice.reducer;
