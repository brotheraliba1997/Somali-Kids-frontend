"use client";
import React, { useState } from "react";
import header from "@/assets/public/images/header-logo.png";
import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="top-bar-section d-none d-sm-block ">
        <div className="container">
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-9">
                  <form action="#">
                    <div className="input-group flex-nowrap pt-3 ">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search Programs"
                        aria-label="Search Programs"
                      />
                      <span
                        className="input-group-text form-icon rounded-pill"
                        id="addon-wrapping"
                      >
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </form>
                </div>
                <div className="col-md-3">
                  <div className="pt-3 text-end">
                    <Link
                      href="login"
                      className="btn btn-danger rounded-pill px-4"
                    >
                      {" "}
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*top-bar//*/}
      <div className="paraxdo-header-section">
        <div className="container">
          <div className="row">
            <div className="paraxdo-header-img">
              <nav className="navbar navbar-expand-lg navbar bg-white ">
                {/* <button
                    className="navbar-toggler bg-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <span className="navbar-toggler-icon bg-dark" />
                    asdasd
                  </button> */}

                <Link className="navbar-brand" href="/">
                  <Image src={header} alt="Logo" id="logsedf" />
                </Link>

                <div className="navbar-toggler px-2 py-1" style={{border: "1px solid gray"}} onClick={() => setNavbarOpen(!navbarOpen)}>
                <RxHamburgerMenu />
                </div>

                {/* Logo */}

                {/* Toggle button for small screens */}

                {/* Navbar links */}
                <div
                  className={`navbar-collapse justify-content-end collapse ${
                    navbarOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="about-us">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="programs">
                        Programs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="apps">
                        Apps
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="our-plans">
                        Our Plans
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="contact-us">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item d-lg-none">
                      <Link className="nav-link" href="login">
                        Log In
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
