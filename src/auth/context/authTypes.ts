export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

export interface State {
  logged: boolean;
  user: {
    id: number;
    name: string;
  } | null;
}

export const initialState: State = {
  logged: false,
  user: null,
};

export interface Action {
  type: string;
  payload?: {
    id: number;
    name: string;
  };
}
