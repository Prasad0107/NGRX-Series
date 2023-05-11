import { Action, createReducer, on } from '@ngrx/store';
import { userDetail, userDetailFailure, userDetailSuccess } from '../action/user-details.action';

export interface userInterface {
    data: any;
    loading: boolean;
    error: any;
}

export const USER_DETAILS_KEY = 'userData';

export const initState: userInterface = {
    data: null,
    loading: false,
    error: null
}

const userReducer = createReducer(
    initState,
    on(userDetail, (state) => {
        return { ...state, loading: false, };
    }),
    on(userDetailSuccess, (state, { data }) => {
        return { ...state, loading: false, data };
    }),
    on(userDetailFailure, (state, { error }) => {
        return { ...state, loading: false, error };
    }),
)


export function UserDetailsReducer(state: any, action: Action) {
    return userReducer(state, action);
}
