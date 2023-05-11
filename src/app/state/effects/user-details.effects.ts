import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { switchMap, tap } from "rxjs";
import { userDetail } from "../action/user-details.action";
import { UserDetailInteractor } from "../interactor/user-details-interactor";

@Injectable()
export class UserDetailEffects {
    constructor(private actions$: Actions, private userInteractor: UserDetailInteractor, private store: Store<any>) { }

    getMockDataEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(userDetail),
            switchMap(({ id }) => this.userInteractor.getUserDetails()),
        )
    )

}