import {initialUserState, UserState} from '../user.state';
import * as UserActions from '../actions/user.actions';
import {ActionTypes} from '../actions/user.actions';
import {createNewUser} from '../../../models/user.model';

export type Action = UserActions.All;

export function userReducer(state: UserState = initialUserState, action: UserActions.All): UserState {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state,
        loginInfo: action.payload,
        loading: true,
      };

    case ActionTypes.GET_USERS:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        errorLogin: false,
        user: action.payload,
      };

    case ActionTypes.GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        logged: false,
        errorLogin: true,
        user: createNewUser()
      };

    case ActionTypes.SAVE_USER:
      return {
        ...state,
        user: Object.assign({}, state.user, action.payload),
        updated: false
      };

    case ActionTypes.SAVE_USER_SUCCESS:
      return {
        ...state,
        updated: true
      };

    default:
      return state;
  }
}
