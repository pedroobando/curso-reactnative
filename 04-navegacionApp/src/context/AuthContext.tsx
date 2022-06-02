import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUser: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'LOGIN', payload: 'Pedro Obando'});
  };

  const signOut = () => {
    dispatch({type: 'LOGOUT'});
  };

  const changeFavIcon = (iconName: string): void => {
    dispatch({type: 'ICON', payload: iconName});
  };

  const changeUser = (userName: string): void => {
    dispatch({type: 'CHANGENAME', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{authState, signIn, signOut, changeFavIcon, changeUser}}>
      {children}
    </AuthContext.Provider>
  );
};
