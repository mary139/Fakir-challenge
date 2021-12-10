import {
    FETCH_USERS_LIST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "./actionTypes";

import {
    FetchUsersList,
    FetchUsersSuccess,
    FetchUsersSuccessPayload,
    FetchUsersFailure,
    FetchUsersFailurePayload,
} from "./types";

export const fetchUsersList = (): FetchUsersList => ({
    type: FETCH_USERS_LIST,
});

export const fetchUsersSuccess = (
    payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
    type: FETCH_USERS_SUCCESS,
    payload,
});

export const fetchUsersFailure = (
    payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
    type: FETCH_USERS_FAILURE,
    payload,
});