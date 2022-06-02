import {AuthState} from './AuthContext';

interface iTypeAuth {
  type: 'LOGIN' | 'LOGOUT' | 'CHANGENAME' | 'ICON';
  payload?: any | null;
}

export const authReducer = (
  state: AuthState,
  {type, payload}: iTypeAuth,
): AuthState => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        username: payload,
        isLoggedIn: true,
      };

    case 'LOGOUT':
      return {
        ...state,
        username: undefined,
        isLoggedIn: false,
        favoriteIcon: undefined,
      };

    case 'ICON':
      return {
        ...state,
        favoriteIcon: payload,
      };

    case 'CHANGENAME':
      return {
        ...state,
        username: payload,
      };

    default:
      return state;
  }
};
