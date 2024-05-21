// src/features/theme/reducer.ts
import { SEND_THEME, ThemeActionTypes } from '../actions/actionTypes';

const initialState: string = 'light'

const themeReducer =  (state = initialState, action: ThemeActionTypes): string => {
  switch (action.type) {
    case SEND_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
