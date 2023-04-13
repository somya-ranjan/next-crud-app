import { combineReducers } from "@reduxjs/toolkit";
import { getEmployeeReducer } from "./employeeListSlice";
import { createEmployeeReducer } from "./createEmployeeSlice";
import { editEmployeeReducer } from "./editEmployeeSlice";
import { deleteEmployeeReducer } from "./deleteEmployeeSlice";

const employeeRootReducers = combineReducers({
  employeeList: getEmployeeReducer,
  createEmployee: createEmployeeReducer,
  editEmployee: editEmployeeReducer,
  deleteEmployee: deleteEmployeeReducer,
});
export default employeeRootReducers;
