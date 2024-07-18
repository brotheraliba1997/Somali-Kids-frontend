import { logout } from "@/redux/slices/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(logout());
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-light shadow text-sm">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index.html" className="nav-link">
            Somali ABC Kids - Admin
          </a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item">
          <div className="btn-group nav-link">
            <button
              type="button"
              className="btn btn-rounded badge badge-light dropdown-toggle dropdown-icon"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span>
                <img
                  src="assets/images/avatars/1.png"
                  className="img-circle elevation-2 user-img"
                  alt="User Image "
                />
              </span>
              <span className="ml-4"> Admin</span>
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div
              className="dropdown-menu show"
              role="menu"
              style={{ left: 0, right: "inherit" }}
            >
              <a className="dropdown-item" href="#">
                <span className="fa fa-user" /> My Account
              </a>
              <div className="dropdown-divider" />
              <div
                className="dropdown-item"
                href="login.html"
                onClick={logoutHandler}
              >
                <span className="fas fa-sign-out-alt" /> Logout
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
