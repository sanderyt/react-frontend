import React, { FC, useContext, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const PublicRoute: FC<{
  children: ReactNode;
  path: string;
  exact: boolean;
}> = props => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <Route path={props.path} exact={props.exact}>
      {props.children}
    </Route>
  );
};
export default PublicRoute;
