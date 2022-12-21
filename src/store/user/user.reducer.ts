import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase';
import { USER_ACTIONS_TYPE } from './user.types';
import { 
  signInFailed, 
  signUpFailed, 
  signOutFailed, 
  signInSucccess, 
  signUpSuccess, 
  signOutSuccess,
  signInStart,
  signInStart,
  signOutStart,

} from './user.action';


export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}
const INITIAL_STATE : UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};
  
export const userReducer = (state = INITIAL_STATE, action: AnyAction) : UserState => {

  if (signInSucccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null
    };
  }

  if((signInFailed || signOutFailed || signUpFailed).match(action)) {
    return {
      ...state,
      error: action.payload
    };
  }

  return state;

};