import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap, switchMap} from 'rxjs/operators';

import {ActionTypes, GetUserError, GetUsers, GetUserSuccess, SaveUserSuccess} from '../actions/user.actions';
import {SigninService} from '../../../services/signin.service';
import {Observable} from "rxjs";
import {ProfileService} from "../../../services/profile.service";

@Injectable()
export class UserEffects {
  @Effect()
  user$: Observable<Action> = this.actions$
    .pipe(
      ofType(ActionTypes.GET_USER),
      tap(action => console.log('Entered effect')),
      // @ts-ignore
      switchMap(action => this.signinService.login(action.payload))
    )
      .pipe(
        map(user => (user !== undefined ? new GetUserSuccess(user) : new GetUserError()))
      );

  @Effect()
  saveUser$: Observable<Action> = this.actions$
    .pipe(
      ofType(ActionTypes.SAVE_USER),
      tap(action => console.log('Saving user effect')),
      // @ts-ignore
      switchMap(action => this.profileService.updateProfile(action.payload).pipe(
        map(() => new SaveUserSuccess())
      ))
    );

  deleteStudy$: Observable<Action> = this.actions$
    .pipe(
      ofType(ActionTypes.DELETE_STUDY),
      tap(action => console.log('Deleting study effect')),
      // @ts-ignore
      switchMap(action => this.profileService.updateProfile(action.payload).pipe(
        map(() => new SaveUserSuccess())
      ))
    );

  constructor(
    private actions$: Actions<Action>,
    private signinService: SigninService,
    private profileService: ProfileService,
  ) {
  }
}
