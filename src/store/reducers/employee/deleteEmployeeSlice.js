import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  errorMsg: "",
  successMsg: "",
};
const employeeSlice = createSlice({
  name: "deleteEmployee",
  initialState,
  reducers: {
    deleteEmployeeStart: (state) => {
      state.isLoading = true;
    },
    deleteEmployeeSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    deleteEmployeeFailed: (state, { payload }) => {
      state.isLoading = false;
      state.errorMsg = payload;
    },
  },
});

export const {
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
} = employeeSlice.actions;
export const deleteEmployeeReducer = employeeSlice.reducer;
