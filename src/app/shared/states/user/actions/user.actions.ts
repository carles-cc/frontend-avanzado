import {UserState} from '../user.state';
import {User} from '../../../models/user.model';
import {Action} from '@ngrx/store';
import {LoginInfo} from '../../../models/login.model';

export enum ActionTypes {
  GET_USER = '[User] GET_USER',
  GET_USERS = '[User] GET_USERS',
  GET_USER_SUCCESS = '[User] GET_USER_SUCCESS',
  GET_USER_ERROR = '[User] GET_USER_ERROR',
  SAVE_USER = '[User} SAVE_USER',
  SAVE_USER_SUCCESS = '[User} SAVE_USER_SUCCESS',
  DELETE_STUDY = '[User] DELETE_STUDY',
}

export class GetUsers implements Action {
  readonly type = ActionTypes.GET_USERS;
}

export class GetUser implements Action {
  readonly type = ActionTypes.GET_USER;
  constructor(public payload: LoginInfo) {}
}

export class GetUserSuccess implements Action {
  readonly type = ActionTypes.GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserError implements Action {
  readonly type = ActionTypes.GET_USER_ERROR;
  public payload = false;
}

export class SaveUser implements Action {
  readonly type = ActionTypes.SAVE_USER;
  constructor(public payload: User) {}
}

export class SaveUserSuccess implements Action {
  readonly type = ActionTypes.SAVE_USER_SUCCESS;
}

export class DeleteStudy implements Action {
  readonly type = ActionTypes.DELETE_STUDY;
  constructor(public payload: User) {}
}

export type All = GetUser | GetUsers | GetUserSuccess | GetUserError | SaveUser | SaveUserSuccess | DeleteStudy;
