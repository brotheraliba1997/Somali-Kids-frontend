import CustomButton from '@/components/customButton'
import React from 'react'

function LoginComponents({ handleChange,submitHandler, Loading}) {
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
          <form action="#" className="row loignbg" onSubmit={submitHandler}>
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
                  name='email'
                  onChange={handleChange}
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
                  onChange={handleChange}
                  name='password'
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="d-grid">
                
                <CustomButton
                      title=" Log In"
                      type="submit"
                      className="btn btn-primary px-4 rounded-1"
                      isLoading={Loading}
                    />
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
