import {initialUserState, UserState} from './user/user.state';

export interface AppState {
  user: UserState;
}

export const initialAppState: AppState = {
  user: initialUserState
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
