import { all, call, put, takeLatest } from "redux-saga/effects";
import HttpService from "../../services/httpService";

import { fetchUsersSuccess, fetchUsersFailure } from "./actions";
import { FETCH_USERS_LIST } from "./actionTypes";

const getUsers = () => HttpService.get("https://jsonplaceholder.typicode.com/users");


function* fetchUsersSaga(): Generator<any, any, any> {
    try {
        const response = yield call(getUsers);
        yield put(
            fetchUsersSuccess({
                users: response.data,
            })
        );
    } catch (e) {
        yield put(
            fetchUsersFailure({
                error: 'error!',
            })
        );
    }
}

function* usersSaga() {
    yield all([takeLatest(FETCH_USERS_LIST, fetchUsersSaga)]);
}

export default usersSaga;