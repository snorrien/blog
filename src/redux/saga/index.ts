import { call, put, takeEvery} from "redux-saga/effects";
import { GET_COMMENTS, GET_POSTS_REQUEST, GET_USERS } from "../constants";
import {postsLoaded, setComments, setPosts, setUsers } from "../actions/actionCreator";
import { getComments, getPosts, getUsers } from "../../api";
import { Post } from "../../models/Post";
import { User } from "../../models/User";

export function* fetchComments(action: any) {
    const data: Comment[] = yield call(getComments, action.postId);
    console.log(data);
    yield put(setComments(data));
}

export function* fetchPosts() {
    const data: Post[] = yield call(getPosts);
    console.log('posts fetched');
    yield put(setPosts(data));
    yield put(postsLoaded());
}

export function* fetchUsers() {
    const data: User[] = yield call(getUsers);
    console.log('users fetched');
    yield put(setUsers(data));
}

export default function* rootSaga() {
    yield takeEvery(GET_POSTS_REQUEST, fetchPosts)
    yield takeEvery(GET_COMMENTS, fetchComments)
    yield takeEvery(GET_USERS, fetchUsers)
}