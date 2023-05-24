import { call, put, takeEvery } from 'redux-saga/effects'
import { User } from '../models/User';
import axios from 'axios';

function* fetchUsers() {
    try {
        const users: any[] = yield call(getUsers);
        yield put({ type: 'USERS_FETCH_SUCCEEDED', user: users })
    } catch (e: any) {
        yield put({ type: 'USERS_FETCH_FAILED', message: e.message })
    }
}

async function getUsers() {
    return (await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
    )).data;
}

function* saga() {
    yield takeEvery('USERS_FETCH_REQUESTED', fetchUsers)
}

export default saga