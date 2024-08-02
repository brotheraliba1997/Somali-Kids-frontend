import Link from 'next/link'
import React from 'react'

function OurPlansComponents() {
  return (
    <>
    <div className="pages-section">
      <div className="container">
        <div className="row">
          <div className="col-mad-12">
            <div className="bannertext">
              <h1>Our Plans</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abthome-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
            <div className="plancard">
              <div className="plancard-header">
                <h3>Individual</h3>
              </div>
              <div className="plancard-body">
                <p>This is meant for families and friends.</p>
                <p>You’ll have an account for accessing our resources</p>
                <p>Monitoring team</p>
                <p className="border-bottom-0">$20 per monthly</p>
              </div>
              <div className="plancard-footer">
                <Link
                  href="register"
                  type="button"
                  className="btn btn-danger btn-lg px-5 rounded-5 "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
            <div className="plancard">
              <div className="plancard-header">
                <h3>Business</h3>
              </div>
              <div className="plancard-body">
                <p>This was custom.</p>
                <p>All the business-like schools, universities, Clubs, etc</p>
                <p>Please contact</p>
                <p className="border-bottom-0">(612) 205-2351</p>
              </div>
              <div className="plancard-footer">
                <Link
                  href="register"
                  type="button"
                  className="btn btn-danger btn-lg px-5 rounded-5 "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default OurPlansComponents
