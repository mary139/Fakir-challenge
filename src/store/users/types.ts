import {
    FETCH_USERS_LIST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from "./actionTypes";

export interface IUsers {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {},
    phone: string,
    website: string,
    company: {}
}

export interface UsersState {
    pending: boolean;
    users: IUsers[];
    error: string | null;
}

export interface FetchUsersSuccessPayload {
    users: IUsers[];
}

export interface FetchUsersFailurePayload {
    error: string;
}

export interface FetchUsersList {
    type: typeof FETCH_USERS_LIST;
}

export type FetchUsersSuccess = {
    type: typeof FETCH_USERS_SUCCESS;
    payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
    type: typeof FETCH_USERS_FAILURE;
    payload: FetchUsersFailurePayload;
};

export type UsersActions =
    | FetchUsersList
    | FetchUsersSuccess
    | FetchUsersFailure;