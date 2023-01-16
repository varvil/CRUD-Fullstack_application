import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__contentR">
        <h1>Crud Application</h1>
      </div>
      <div className="navbar__contentL">
        <ul>
          <li><Link className="nav__button" to={`/`}>
              Home
            </Link></li>

          <l1>
            <Link className="nav__button" to={`/add-user`}>
              Add User
            </Link>
          </l1>

          <l1>
            <Link className="nav__button" to={`/add-profile`}>
              Add Profile
            </Link>
          </l1>

        </ul>
      </div>
    </div>
  );
};

export default NavBar;
