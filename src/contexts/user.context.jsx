import { createContext, useReducer, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase';
import { createAction } from '../utils/reducer/utils';
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTIONS_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};



const userReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
  case USER_ACTIONS_TYPE.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: payload
    };

  default:
    throw new Error(`Invalid action ${action} in UserReducer`);
  }
  
};

export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTIONS_TYPE.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children} </UserContext.Provider>;
};
