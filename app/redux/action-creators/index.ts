// actionCreators.ts
import { Appearance, ColorSchemeName } from 'react-native';
import { SEND_THEME, SendThemeAction } from '../actions/actionTypes';

export const changeTheme = (theme: ColorSchemeName): SendThemeAction => {
  Appearance.setColorScheme(theme);
  return {
    type: SEND_THEME,
    payload: theme,
  };
};