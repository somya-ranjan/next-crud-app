import { all, takeLatest } from "redux-saga/effects";
import {
  createEmployeeAction,
  deleteEmployeeAction,
  editEmployeeAction,
  getAllEmployeeAction,
} from "../sagaActions";
import { getAllEmployeeSaga } from "./employee/employee";
import { createEmployeeSaga } from "./employee/createEmployee";
import { editEmployeeSaga } from "./employee/editEmployee";
import { deleteEmployeeSaga } from "./employee/deleteEmployee";

function* employeeWatcher() {
  yield takeLatest(getAllEmployeeAction.type, getAllEmployeeSaga);
  yield takeLatest(createEmployeeAction.type, createEmployeeSaga);
  yield takeLatest(editEmployeeAction.type, editEmployeeSaga);
  yield takeLatest(deleteEmployeeAction.type, deleteEmployeeSaga);
}

export default function* rootSaga() {
  yield all([employeeWatcher()]);
}
