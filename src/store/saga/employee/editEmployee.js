import { put } from "redux-saga/effects";
import {
  editEmployeeStart,
  editEmployeeSuccess,
  editEmployeeFailed,
} from "../../sagaActions";
import { GET_ALL_EMPLOYEE } from "../../../apis";
import errorHandler from "../../../utils/errorHandler";
import toaster from "@/utils/toaster";

export function* editEmployeeSaga({ payload }) {
  const { values, id, onSuccess } = payload;
  yield put(editEmployeeStart());
  yield errorHandler({
    endpoint: `${GET_ALL_EMPLOYEE}/${id}`,
    successHandler: yield function* (response) {
      yield put(editEmployeeSuccess(response?.data));
      toaster.success(response.message);
      yield onSuccess();
    },
    failHandler: yield function* (response) {
      yield put(editEmployeeFailed(response));
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    payload: values,
    apiType: "put",
  });
}
