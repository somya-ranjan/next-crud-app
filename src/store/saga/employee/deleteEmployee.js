import { put } from "redux-saga/effects";
import {
  deleteEmployeeStart,
  deleteEmployeeSuccess,
  deleteEmployeeFailed,
} from "../../sagaActions";
import { GET_ALL_EMPLOYEE } from "../../../apis";
import errorHandler from "../../../utils/errorHandler";
import toaster from "@/utils/toaster";

export function* deleteEmployeeSaga({ payload }) {
  const { id, onSuccess } = payload;
  yield put(deleteEmployeeStart());
  yield errorHandler({
    endpoint: `${GET_ALL_EMPLOYEE}/${id}`,
    successHandler: yield function* (response) {
      yield put(deleteEmployeeSuccess(response?.data));
      toaster.success(response.message);
      yield onSuccess();
    },
    failHandler: yield function* (response) {
      yield put(deleteEmployeeFailed(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "delete",
  });
}
