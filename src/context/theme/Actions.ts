import { TOGGLE_THEME } from "./ActionTypes";

const toggleTheme = (mode: boolean) => ({
  type: TOGGLE_THEME,
  payload: mode,
});

export { toggleTheme };
