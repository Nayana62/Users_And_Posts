import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <NavLink to={"/users"}>
        <div className={location.pathname === "/users" ? "active" : ""}>
          Users
        </div>
      </NavLink>

      <NavLink to={"/posts"}>
        <div className={location.pathname === "/posts" ? "active" : ""}>
          Posts
        </div>
      </NavLink>
    </div>
  );
};

export default Header;
