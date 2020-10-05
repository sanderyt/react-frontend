import React from "react";
import { Link } from "react-router-dom";
import Flex from "../Flex";

import "./menu.scss";

const Menu = () => {
  return (
    <Flex container justifyContent="center" className="menu">
      <ul>
        <li>
          <Link to="/dashboard/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
      </ul>
    </Flex>
  );
};

export default Menu;
