// root-reducer
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './store.interface';
import {userReducer} from './user/reducers/user.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  user: userReducer
};
