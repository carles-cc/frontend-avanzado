import {AppState} from '../../store.interface';
import {UserState} from '../user.state';

export const selectedUser = (state: AppState) => state.user.user;
export const errorLogin = (state: AppState) => state.user.errorLogin;
export const loading = (state: AppState) => state.user.loading;
export const logged = (state: AppState) => state.user.logged;
export const updated = (state: AppState) => state.user.updated;
export const studiesSelector = (state: AppState) => state.user.user.studies;
