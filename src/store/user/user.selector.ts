
import { createSelector } from 'reselect';
import { UserState } from './user.reducer';
import { RootState } from '../index';

export const selectUserReducer = (state: RootState) : UserState => state.user;
export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser);