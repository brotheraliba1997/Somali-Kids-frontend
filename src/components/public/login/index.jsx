import React from 'react'

function LoginComponents() {
  return (
    <>
  <div className="pages-section">
    <div className="container">
      <div className="row">
        <div className="col-mad-12">
          <div className="bannertext">
            <h1>Authentication</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="abthome-section">
    <div className="container">
      <div className="row gap-lg-5 justify-content-center">
        <div className="col-lg-5 col-md-12 col-sm-12 mb-3">
          <form action="#" className="row loignbg">
            <div className="col-md-12 mb-3">
              <div className="cont-text">
                <h2>LOGIN</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="eamil" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="d-grid">
                <button className="btn btn-primary px-4 rounded-1">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 mb-3">
          <form action="#" className="row loignbg">
            <div className="col-md-12">
              <div className="cont-text mb-3">
                <h2 style={{ color: "#EC3C26" }}>REGISTER</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="eamil" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  required=""
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="d-grid ">
                <button className="btn btn-danger px-4 rounded-1">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default LoginComponents
