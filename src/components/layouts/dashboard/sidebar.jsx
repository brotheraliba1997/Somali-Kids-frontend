"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/auth";

function Sidebar() {
  const [upload, setUpload] = useState(false);
  const [setting, setSetting] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(logout());
  };

  return (
    <aside className="main-sidebar sidebar-dark-navy navbar-dark elevation-4 sidebar-no-expand">
      <a href="index.html" className="brand-link bg-navy text-sm ">
        <Image
          src={logo}
          alt="Store Logo"
          className="brand-image  elevation-3 "
        />
        <span className="brand-text font-weight-light text-light">
          Somali ABC
        </span>
      </a>
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" />
        </div>
        <div className="os-size-auto-observer observed">
          <div className="os-resize-observer" />
        </div>
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{ overflowY: "scroll" }}
          >
            <div
              className="os-content"
              style={{ padding: "0px 8px", height: "100%", width: "100%" }}
            >
              <div className="clearfix" />
              <nav className="mt-1">
                <ul
                  className="nav nav-pills nav-sidebar flex-column text-sm nav-compact nav-flat nav-child-indent nav-collapse-hide-child"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item dropdown">
                    <a
                      href="index.html"
                      className="nav-link nav-home active bg-gradient-navy"
                    >
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>Dashboard</p>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      href="/dashboard/customer-registration"
                      className="nav-link nav-customer"
                    >
                      <i className="nav-icon fas fa-users" />
                      <p>Customer Registration</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item `}
                    // className={`nav-item ${
                    //   upload ? "menu-is-opening menu-open" : ""
                    // }`}
                  >
                    <div
                      href="#"
                      className="nav-link"
                      onClick={() => setUpload(!upload)}
                    >
                      <i className="nav-icon fas fa-video" />
                      <p>
                        Resources
                        <i className="right fas fa-angle-left" />
                      </p>
                    </div>
                    <ul
                      className={`nav nav-subitem ${upload ? "show" : ""}`}
                      // style={{ display: upload ? "none" : "block" }}
                      // style={{
                      //   // width: upload ? "100%" : "",
                      //   height: upload ? "400px" : "0px",

                      //   transition: "all 5s",
                      // }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/dashboard/upload-video"
                          className="nav-link tree-item nav-upload_video"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Upload Video</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-header">Maintenance</li>
                  <li className="nav-item dropdown">
                    <Link
                      href="/dashboard/users"
                      className="nav-link nav-user_list"
                    >
                      <i className="nav-icon fas fa-users-cog" />
                      <p>Users</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      setting ? "menu-is-opening menu-open" : ""
                    }`}
                  >
                    <span
                      href="#"
                      className="nav-link"
                      onClick={() => setSetting(!setting)}
                    >
                      <i className="nav-icon fas fa-tools" />
                      <p>
                        Setting
                        <i className="right fas fa-angle-left" />
                      </p>
                    </span>
                    <ul
                      className="nav nav-treeview"
                      style={{ display: setting ? "none" : "block" }}
                    >
                      <li className="nav-item">
                        <Link
                          href="/dashboard/categories"
                          className="nav-link tree-item nav-categories"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Categories</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/dashboard/language"
                          className="nav-link tree-item nav-languages"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Languages</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link tree-item nav-packages">
                          <i className="far fa-circle nav-icon" />
                          <p>Packages</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link tree-item nav-permission"
                        >
                          <i className="far fa-circle nav-icon" />
                          <p>Permission</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown" onClick={logoutHandler}>

                    <div  className="nav-link nav-system_info">
                      <i className="nav-icon fas fa-sign-out-alt" />
                      <p>Logout</p>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
    </aside>
  );
}

export default Sidebar;
