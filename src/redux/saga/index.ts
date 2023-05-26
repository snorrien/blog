import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_COMMENTS, GET_POSTS } from "../constants";
import { setComments, setPosts } from "../actions/actionCreator";
import { getComments, getPosts } from "../../api";
import { Post } from "../../models/Post";

export function* fetchComments(action: any) {
    
    const data: Comment[] = yield call(getComments, action.postId);
    console.log(data);
    yield put(setComments(data));
}

export function* fetchPosts() {
    const data: Post[] = yield call(getPosts);
    console.log('posts fetched');
    yield put(setPosts(data));
}

export default function* rootSaga() {
    yield takeEvery(GET_POSTS, fetchPosts)
    yield takeEvery(GET_COMMENTS, fetchComments)
}