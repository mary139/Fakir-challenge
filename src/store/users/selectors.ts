import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.users.pending;

const getUsers = (state: AppState) => state.users;

const getError = (state: AppState) => state.users.error;

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);