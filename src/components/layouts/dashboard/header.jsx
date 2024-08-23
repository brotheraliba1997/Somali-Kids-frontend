"use client";
import { logout } from "@/redux/slices/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoHeader from "@/assets/images/avatars/1.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(logout());
    
  };

  const user = useSelector((state) => state?.auth?.user);

  return (
    <nav className="main-header navbar navbar-expand navbar-light shadow text-sm">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            href="/dashboard"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="/dashboard" className="nav-link dashPara">
            Somali ABC Kids -{" "}
            {user?.role === "parent"
              ? "Parent"
              : user?.role === "admin"
              ? "Admin"
              : "Teacher"}
          </Link>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item">
          <div className="btn-group nav-link">
            <button
              type="button"
              onClick={() => setOpenDropDown(!openDropDown)}
              className="btn btn-rounded badge badge-light dropdown-toggle dropdown-icon"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "black" }}
            >
              <span>
                <Image
                  src={logoHeader}
                  className="img-circle elevation-2 user-img"
                  alt="User Image"
                />
              </span>
              <span className="pl-4 m-0 dashPara" style={{ color: "black" }}>
                {user?.firstName}
              </span>

              <span className=" pl-2 m-0 dashPara" style={{ color: "black" }}>
                {user?.lastName}
              </span>

              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div
              className={`dropdown-menu ${openDropDown ? "show" : " "}`}
              role="menu"
              style={{ left: 0, top: "40px" }}
            >
              <a className="dropdown-item" href="#">
                <span className="fa fa-user" /> My Account
              </a>
              <div className="dropdown-divider" />
              <div className="dropdown-item" onClick={logoutHandler}>
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
