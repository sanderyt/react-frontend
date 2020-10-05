import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

import "./header.scss";
import Flex from "../../Flex";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="header">
      <h3>Sander's portfolio CMS</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {user ? (
          <span>User is logged in</span>
        ) : (
          <>
            <Link to="/signup">
              <li>Signup</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
