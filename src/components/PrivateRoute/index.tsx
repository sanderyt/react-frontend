import React, { FC, useContext, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const PrivateRoute: FC<{
  children: ReactNode;
  path: string;
  exact?: boolean;
}> = props => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Route path={props.path} exact={props.exact}>
      {props.children}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
