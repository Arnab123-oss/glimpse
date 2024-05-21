//actions.ts
import { SEND_THEME, ThemeActionTypes } from './actionTypes';
import { Dispatch } from 'redux';

export const changeTheme = (theme: string) => {
  return (dispatch: Dispatch<ThemeActionTypes>) => {
    dispatch({
      type: SEND_THEME,
      payload: theme,
    });
  };
};

// export const changeTheme = (theme: string) => {
//   return {
//     type: SEND_THEME,
//     payload: theme,
//   };
// };
