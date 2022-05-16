import { TOGGLE_THEME } from "./ActionTypes";

interface State {
  isDarkMode: boolean;
}

// interface Action {type: INCREMENT} | {type: DECREMENT};

export default function themeReducer(state: State, { type, payload }: never) {
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        isDarkMode: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type as string}`);
    }
  }
}
