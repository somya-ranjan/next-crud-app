import { put } from "redux-saga/effects";
import {
  createEmployeeStart,
  createEmployeeSuccess,
  createEmployeeFailed,
} from "../../sagaActions";
import { GET_ALL_EMPLOYEE } from "../../../apis";
import errorHandler from "../../../utils/errorHandler";
import toaster from "@/utils/toaster";

export function* createEmployeeSaga({ payload }) {
  const { values, onSuccess } = payload;
  yield put(createEmployeeStart());
  yield errorHandler({
    endpoint: GET_ALL_EMPLOYEE,
    successHandler: yield function* (response) {
      yield put(createEmployeeSuccess(response?.data));
      toaster.success(response.message);
      yield onSuccess();
    },
    failHandler: yield function* (response) {
      yield put(createEmployeeFailed(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: values,
    apiType: "post",
  });
}
