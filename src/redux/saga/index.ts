import { call, put, takeEvery} from "redux-saga/effects";
import { GET_COMMENTS, GET_POSTS_REQUEST, GET_USERPOSTS_REQUEST, GET_USERS } from "../constants";
import { postsLoaded, setComments, setPosts, setUserPosts, setUsers, userPostsLoaded } from "../actions/actionCreator";
import { getComments, getPosts, getUserPosts, getUsers } from "../../api";
import { Post } from "../../models/Post";
import { User } from "../../models/User";

export function* fetchComments(action: any) {
    const data: Comment[] = yield call(getComments, action.postId);
    yield put(setComments(data));
}

export function* fetchPosts() {
    const data: Post[] = yield call(getPosts);
    yield put(setPosts(data));
    yield put(postsLoaded());
}

export function* fetchUsers() {
    const data: User[] = yield call(getUsers);
    yield put(setUsers(data));
}

export function* fetchUserPosts(action: any) {
    const data: Post[] = yield call(getUserPosts, action.userId);
    yield put(setUserPosts(data));
    yield put(userPostsLoaded());
}

export default function* rootSaga() {
    yield takeEvery(GET_POSTS_REQUEST, fetchPosts);
    yield takeEvery(GET_COMMENTS, fetchComments);
    yield takeEvery(GET_USERS, fetchUsers);
    yield takeEvery(GET_USERPOSTS_REQUEST, fetchUserPosts);
}