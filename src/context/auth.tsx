import React, { createContext, useReducer, FC } from "react";
import jwtDecode from "jwt-decode";

interface IAuth {
  user: string | null;
  login: (userData: object) => void;
  logout: () => void;
}

interface MyToken {
  name: string;
  exp: number;
}

interface InitialState {
  user: MyToken | null;
}

const initialState: InitialState = {
  user: null
};

const storedToken = localStorage.getItem("jwtToken");

if (storedToken) {
  const decodedToken = jwtDecode<MyToken>(storedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

const AuthContext = createContext<IAuth>({
  user: null,
  login: userData => {},
  logout: () => {}
});

//Reducers
const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

//Actions and returning the state down the component tree
const AuthProvider: FC = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData: string) => {
    localStorage.setItem("jwtToken", userData);
    dispatch({
      type: "LOGIN",
      payload: userData
    });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
