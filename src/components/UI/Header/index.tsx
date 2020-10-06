import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

import Button from "../../Button";

import "./header.scss";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {user ? (
          <Button secondary clickHandler={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Link to="/signup">
              <li>Signup</li>
            </Link>
            <Link to="/login">
              <li>
                <Button primary>Login</Button>
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
