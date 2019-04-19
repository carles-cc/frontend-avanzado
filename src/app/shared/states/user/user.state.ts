import {User, createNewUser} from '../../models/user.model';

export interface UserState {
  loading: boolean;
  logged: boolean;
  errorLogin: boolean;
  loginInfo: {
    email: string;
    password: string;
  };
  updated: boolean;
  user: User;
}

export const initialUserState: UserState = {
  loading: false,
  logged: false,
  errorLogin: false,
  loginInfo: null,
  updated: false,
  user: createNewUser()
}
