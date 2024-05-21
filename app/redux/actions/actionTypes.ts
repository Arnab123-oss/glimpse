import { ColorSchemeName } from "react-native";

// actionTypes.ts
export const SEND_THEME = 'sendTheme';

export interface SendThemeAction {
  type: typeof SEND_THEME;
  payload: ColorSchemeName;
}

export type ThemeActionTypes = SendThemeAction;
