import UserActions from './user.types';

// These functions create actions(aka objects)
export const setCurrentUser = (user) => ({
  type: UserActions.SET_CURRENT_USER,
  payload: user,
});
