import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { userDetail } from 'src/app/state/action/user-details.action';
import { selectUserDetails } from 'src/app/state/selector/user-details.selector';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnChanges {
  userData$?: Observable<any>;
  userdata: any;
  id: string = "1";
  constructor(
    private store: Store<any>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.showData();
  }

  ngOnInit(): void {
    this.getUserDetails();
  }


  public getUserDetails() {
    this.store.dispatch(userDetail({ id: this.id }));
    this.userData$ = this.store.pipe(select(selectUserDetails));



    setTimeout(() => {
      this.showData();
    }, 10000);

  }

  public showData() {
    console.log("prasadJagtap");

    this.userData$?.subscribe(((resp: any) => console.log("PJ", resp)
    ))
  }

}
