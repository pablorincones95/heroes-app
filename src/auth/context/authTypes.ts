export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
};

export interface State {
  logged: boolean;
  name: string;
}

export const initialState: State = {
  logged: false,
  name: "",
};

export interface Action {
  type: string;
  payload?: any;
}
