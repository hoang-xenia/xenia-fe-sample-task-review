/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";
import { useLocation, Link } from "react-router-dom";
import { ROUTES } from "../../constants/route";

const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="topnav">
      <a className={pathName === ROUTES.HOME ? "active" : ""}>
        <Link to={ROUTES.HOME}>Home</Link>
      </a>
      <a className={pathName === ROUTES.CARS ? "active" : ""}>
        <Link to={ROUTES.CARS}>Cars</Link>
      </a>
      <a className={pathName === ROUTES.USERS ? "active" : ""}>
        <Link to={ROUTES.USERS}>Users</Link>
      </a>
      <a
        className={
          pathName === ROUTES.CARS_AVAILABLE ||
          pathName.startsWith(ROUTES.CARS_AVAILABLE)
            ? "active"
            : ""
        }
      >
        <Link to={ROUTES.CARS_AVAILABLE}>Car Available</Link>
      </a>
    </div>
  );
};

export default Nav;
