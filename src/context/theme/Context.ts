import { useContext, createContext } from "react";
import initialState from "./initalState";

// type Dispatch = (action: Action) => void;
const ThemeStateContext = createContext(initialState);
const ThemeDispatchContext = createContext("");
const ThemeStateProvider = ThemeStateContext.Provider;
const ThemeDispatchProvider = ThemeDispatchContext.Provider;

function useThemeState() {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("useThemeState must be used within a ThemeProvider");
  }
  return context;
}

function useThemeDispatch() {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error("useThemeDispatch must be used within a ThemeProvider");
  }
  return context;
}

function useTheme() {
  return [useThemeState(), useThemeDispatch()];
}

export {
  useTheme,
  useThemeState,
  useThemeDispatch,
  ThemeStateProvider,
  ThemeDispatchProvider,
};
