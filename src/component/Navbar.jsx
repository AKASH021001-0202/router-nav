import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid">
        <div className="nav-bar-menu">
        <div className="container">
      <div className="row">
        <nav className="nav nav-pills nav-justified">
          <NavLink className="nav-link" activeClassName="active" exact to="/">
            All
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/full-stack-development">
            Full stack development
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/data-science">
            Data science
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/cyber-security">
            Cyber Security
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/career">
            Career
          </NavLink>
        </nav>
      </div>
    </div>
        </div>
    </div>
 
  );
};

export default Navbar;
