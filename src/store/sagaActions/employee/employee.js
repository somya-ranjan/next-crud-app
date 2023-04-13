import { createAction } from "@reduxjs/toolkit";
export const getAllEmployeeAction = createAction("GET_ALL_EMPLOYEE_ACTION");
export const createEmployeeAction = createAction("CREATE_EMPLOYEE_ACTION");
export const editEmployeeAction = createAction("EDIT_EMPLOYEE_ACTION");
export const deleteEmployeeAction = createAction("DELETE_EMPLOYEE_ACTION");
