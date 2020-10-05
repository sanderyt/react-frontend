import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth";

import { Button } from "react-bootstrap";

import "./header.scss";

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
          <Button variant="danger">Logout</Button>
        ) : (
          <>
            <Link to="/signup">
              <li>Signup</li>
            </Link>
            <Link to="/login">
              <li>
                <Button variant="primary">Login</Button>
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
