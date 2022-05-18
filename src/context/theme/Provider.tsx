import React, { useReducer, ReactNode, ReducerWithoutAction } from "react";
import themeReducer from "./Reducer";
import {
  useThemeState,
  useThemeDispatch,
  ThemeStateProvider,
  ThemeDispatchProvider,
} from "./Context";
import initialState from "./initalState";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer(
    themeReducer as ReducerWithoutAction<any>,
    initialState
  );
  return (
    <ThemeStateProvider value={state}>
      <ThemeDispatchProvider value={dispatch}>{children}</ThemeDispatchProvider>
    </ThemeStateProvider>
  );
};

export { ThemeProvider, useThemeState, useThemeDispatch };
