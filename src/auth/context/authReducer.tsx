import { types } from "./authTypes";
import type { Action, State } from "./authTypes";

export const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload || null,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};
