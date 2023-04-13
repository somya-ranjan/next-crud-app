import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  errorMsg: "",
  successMsg: "",
};
const employeeSlice = createSlice({
  name: "editEmployee",
  initialState,
  reducers: {
    editEmployeeStart: (state) => {
      state.isLoading = true;
    },
    editEmployeeSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    editEmployeeFailed: (state, { payload }) => {
      state.isLoading = false;
      state.errorMsg = payload;
    },
  },
});

export const { editEmployeeStart, editEmployeeSuccess, editEmployeeFailed } =
  employeeSlice.actions;
export const editEmployeeReducer = employeeSlice.reducer;
