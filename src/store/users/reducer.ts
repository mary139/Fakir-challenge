import {
    FETCH_USERS_LIST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "./actionTypes";

import { UsersActions, UsersState } from "./types";

const initialState: UsersState = {
    pending: false,
    users: [],
    error: null,
};

const usersReducer = (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case FETCH_USERS_LIST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload.users,
                error: null,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                pending: false,
                users: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};

export default usersReducer;