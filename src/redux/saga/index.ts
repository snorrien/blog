import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_COMMENTS } from "../constants";
import { setComments } from "../actions/actionCreator";
import { getComments } from "../../api";

export function* fetchComments() {
    const data: Comment[] = yield call(getComments);
    console.log('comments fetched');
    yield put(setComments(data));
}

export default function* rootSaga() {
    yield takeEvery(GET_COMMENTS, fetchComments)
}