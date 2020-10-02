import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
