"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/auth";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [activeIndices, setActiveIndices] = useState({
    mainIndex: null,
    dropIndex: null,
  });
  const user = useSelector((state) => state?.auth?.user?.role);
  console.log(user, "user");

  const handleMainClick = (index) => {
    setActiveIndices({
      mainIndex: index,
      dropIndex: null, // Reset dropdown when main menu changes
    });
  };

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(logout());
  };

  const pathname = usePathname();
  console.log(pathname, "location");

  const sidebarList = [
    {
      text: "Dashboard",
      url: "/dashboard",
      icon: "nav-icon fas fa-tachometer-alt",
      role: ["admin", "teacher", "parent"],
    },
    {
      text: "Customer Registration",
      url: "/dashboard/customer-registration",
      icon: "nav-icon fas fa-users",
      role: ["admin", "teacher"],
    },

    {
      url: "/dashboard/package",
      text: "Packages",
      icon: "nav-icon fas fa-users",
      role: ["parent"],
    },
    {
      text: "Resources",
      url: "",
      icon: "nav-icon fas fa-video",
      dropDownArrow: "right fas fa-angle-left",
      role: ["admin", "teacher"],
      dropDown: [
        {
          url: "/dashboard/upload-video",
          text: "Upload Video",
          icon: "nav-icon fas fa-users",
          role: ["admin", "teacher"],
        },
      ],
    },
    {
      text: "Maintenance",
      url: "",
      icon: "",
      role: ["admin", "teacher"],
    },
    {
      text: "Users",
      url: "/dashboard/users",
      icon: "nav-icon fas fa-video",
      role: ["admin", "teacher"],
    },
    {
      text: "Setting",
      url: "",
      icon: "nav-icon fas fa-tools",
      dropDownArrow: "right fas fa-angle-left",
      role: ["admin", "teacher"],
      dropDown: [
        {
          url: "/dashboard/categories",
          text: "Categories",
          icon: "far fa-circle nav-icon",
          role: ["admin", "teacher", "parent"],
        },
        {
          url: "/dashboard/language",
          text: "Languages",
          icon: "nav-icon fas fa-users",
          role: ["admin", "teacher", "parent"],
        },

        {
          url: "/dashboard/package",
          text: "Packages",
          icon: "nav-icon fas fa-users",
          role: ["admin", "teacher", "parent"],
        },

        {
          url: "/dashboard/subcription",
          text: "Subcription",
          icon: "nav-icon fas fa-users",
          role: ["admin", "teacher", "parent"],
        },

        {
          url: "/dashboard/permission",
          text: "Permission",
          icon: "nav-icon fas fa-users",
          role: ["admin","teacher", "parent"],
        },

        {
          url: "/dashboard/program",
          text: "Program",
          icon: "nav-icon fas fa-users",
          role: ["admin", "teacher", "parent"],
        },
      ],
    },
  ];

  return (
    <aside className="main-sidebar sidebar-dark-navy navbar-dark elevation-4 sidebar-no-expand">
      <Link href="/dashboard" className="brand-link bg-navy text-sm ">
        <Image
          src={logo}
          alt="Store Logo"
          className="brand-image  elevation-3"
        />
        <span className="brand-text font-weight-light text-light">
          Somali ABC
        </span>
      </Link>
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
                  {sidebarList
                    ?.filter((access) => access?.role?.includes(user))
                    ?.map((items, index) => (
                      <li
                        key={index}
                        className={`nav-item dropdown 
                        ${
                          items?.url === pathname
                            ? "bg-gradient-navy bg-dark"
                            : ""
                        } 
                        ${
                          activeIndices.mainIndex === index
                            ? "menu-is-opening menu-open"
                            : ""
                        } 
                      `}
                        onClick={() => handleMainClick(index)}
                      >
                        <Link
                          href={items?.url}
                          className="nav-link nav-customer"
                        >
                          <span style={{ cursor: "pointer" }}>
                            <div className="d-flex justify-content-between">
                              <p>
                                <i className={items?.icon} />
                                {items?.text}{" "}
                              </p>
                              <p>
                                {" "}
                                <i className={items?.dropDownArrow} />
                              </p>
                            </div>
                          </span>
                        </Link>

                        <ul
                          className={`nav nav-treeview nav-subitem  ${
                            activeIndices.mainIndex === index ? "show" : "hide"
                          }`}
                        >
                          {items?.dropDown?.filter((access) => access?.role?.includes(user))?.map((itemsDrop, dropIndex) => (
                            <li
                              key={dropIndex}
                              className={`nav-item w-100 ${
                                activeIndices.mainIndex === index
                                  ? "d-block"
                                  : "d-none"
                              } ${
                                itemsDrop?.url === pathname
                                  ? " bg-gradient-navy"
                                  : ""
                              }`}
                            >
                              <Link
                                href={itemsDrop?.url}
                                className="nav-link tree-item nav-categories"
                              >
                                <span style={{ cursor: "pointer" }}>
                                  <i className="far fa-circle nav-icon" />
                                  <p>{itemsDrop?.text}</p>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  <li className="nav-item dropdown" onClick={logoutHandler}>
                    <div className="nav-link nav-system_info">
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
