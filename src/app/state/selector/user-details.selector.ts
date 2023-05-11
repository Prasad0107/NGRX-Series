import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_DETAILS_KEY, userInterface } from "../reducer/user-details.reducer";

// interface userInterface {
//     title: string, id: number, userId?: number
// }
export const selectFeature = createFeatureSelector<userInterface>(USER_DETAILS_KEY);

// export const cId = createSelector(selectFeature, (state: userInterface) => state.id);
// export const cUserId = (state: userInterface) => state.userId;
// export const cTitle = (state: userInterface) => state.title;

// export const cNameSe = createSelector(
//     cTitle, cId, cUserId,
//     (title: string, id: number, userId: number) => {

//         return { cTitle, cId, cUserId };

//     }
// )

// export const selectFeature = createFeatureSelector<UserDetailState>(USER_DETAILS_KEY);
export const selectUserDetails = createSelector(selectFeature, (state: userInterface) => state.data);
