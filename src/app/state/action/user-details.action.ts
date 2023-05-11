import { createAction, props } from "@ngrx/store";

interface userInterface {
    title: string, id: number, userId: number
}

export const userDetail = createAction(
    '[USER] get user details',
    props<{ id: string }>()
);

export const userDetailSuccess = createAction(
    '[USER] get user details success',
    props<{ data: any }>()
);

export const userDetailFailure = createAction(
    '[USER] get user details failure',
    props<{ error: any }>()
);