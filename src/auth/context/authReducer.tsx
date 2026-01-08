import { types } from "./authTypes";
import type { Action, State } from "./authTypes";

export const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
        name: "",
      };
    default:
      return state;
  }
};
