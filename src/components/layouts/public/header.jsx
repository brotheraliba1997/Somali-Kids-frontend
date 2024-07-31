import React from 'react'
import header from "@/assets/public/images/header-logo.png"
import Image from 'next/image'
import Link from 'next/link'

function Header() {
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
                <a
                  href="login.html"
                  className="btn btn-danger rounded-pill px-4"
                >
                  {" "}
                  Log In
                </a>
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
            <div className="container-fluid">
              {/* Logo */}
              <a className="navbar-brand" href="index.html">
                <Image
                  src={header}
                  alt="Logo"
                  id="logsedf"
                />
              </a>
              {/* Toggle button for small screens */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Navbar links */}
              <div
                className="collapse navbar-collapse justify-content-end "
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Header
