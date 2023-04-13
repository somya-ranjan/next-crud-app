import { put } from "redux-saga/effects";
import {
  getEmployeeStart,
  getEmployeeSuccess,
  getEmployeeFailed,
} from "../../sagaActions";
import { GET_ALL_EMPLOYEE } from "../../../apis";
import errorHandler from "../../../utils/errorHandler";
import toaster from "@/utils/toaster";

export function* getAllEmployeeSaga() {
  yield put(getEmployeeStart());
  yield errorHandler({
    endpoint: GET_ALL_EMPLOYEE,
    successHandler: yield function* (response) {
      yield put(getEmployeeSuccess(response?.data));
    },
    failHandler: yield function* (response) {
      yield put(getEmployeeFailed(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}
