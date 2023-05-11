import { Injectable } from "@angular/core";
import { catchError, map, of, tap } from "rxjs";
import { UserDetailsService } from "src/app/user-details.service";
import { userDetailFailure, userDetailSuccess } from "../action/user-details.action";

@Injectable({
    providedIn: 'root',
})
export class UserDetailInteractor {
    constructor(private userDetailService: UserDetailsService) { }

    getUserDetails() {
        return this.userDetailService.getUserDetail().
            pipe(
                map((data) => {
                    return userDetailSuccess({ data });
                }),
                catchError((err) => of(userDetailFailure({ error: err })))
            );
    }
}