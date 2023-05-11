import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { USER_DETAILS_KEY, UserDetailsReducer } from './state/reducer/user-details.reducer';
import { UserDetailEffects } from './state/effects/user-details.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ userData: UserDetailsReducer }),
    EffectsModule.forRoot([UserDetailEffects]),
    // StoreModule.forFeature('userData', UserDetailsReducer),
    // EffectsModule.forFeature([
    //   UserDetailEffects]),

  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
