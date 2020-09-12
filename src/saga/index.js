import {
  call,
  all,
  put,
  //   takeEvery,
  //   takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { INIT_LIST } from "../store/actionType";
import { initList } from "../store/actionCreators";
import { getMockData } from "../Api/index";

// generator
function* getList() {
  const res = yield call(getMockData);
  yield put(initList(res)); // 集成store.dispatch
}
function* watchGetMock() {
  yield takeLeading(INIT_LIST, getList);
}
export default function* mySaga() {
  yield all([watchGetMock()]);
}
