import createDataContext from './createDataContext';
import authReducer from '../reducers/auth';
import { signUp, signIn } from '../actions/auth';

export const initialState = {
  user: null,
  isAuthenticated: false,
  signUpErr: ''
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signUp, signIn },
  initialState,
)