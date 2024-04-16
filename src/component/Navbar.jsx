import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid">
        <div className="nav-bar-menu">
        <div className="container">
      <div className="row">
        <nav className="nav nav-pills ">
          <NavLink className="nav-link" activeClassName="active1" exact to="/">
            All
          </NavLink>
          <NavLink className="nav-link" activeClassName="active1" to="/full-stack-development">
            Full stack development
          </NavLink>
          <NavLink className="nav-link" activeClassName="active1" to="/data-science">
            Data science
          </NavLink>
          <NavLink className="nav-link" activeClassName="active1" to="/cyber-security">
            Cyber Security
          </NavLink>
          <NavLink className="nav-link" activeClassName="active1" to="/career">
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
