import CustomButton from '@/components/customButton';
import React from 'react'
import { LuClock9 } from "react-icons/lu";

function Contact({ format,isLoading, ContactValueHandler, handleContactTypeChange}) {
  console.log(format)
  return (
    <>
    <div className="pages-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bannertext">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abthome-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <div className="cont-text">
              <h2>Get in Touch with Us</h2>
              <p>
                We are here to support you and your child's learning journey. If
                you have any questions, suggestions, or need assistance, please
                don't hesitate to reach out to us.
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center" style={{gap: "15px"}}>
              <div className="icongbg">
                <i className="fa fa-phone" />
              </div>
              <div>
                <p className="mt-3">(612) 205-2351</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center" style={{gap: "20px"}}>
              <div className="icongbg">
                <i className="fa fa-envelope" style={{ fontSize: 20 }} />
              </div>
              <div>
                <p className="mt-3">support@Somaliabckidslearning.com</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center" style={{gap: "15px"}}>
              <div className="icongbg">
                <i
                  className="fa fa-map-marker"
                  style={{ paddingLeft: 3, paddingRight: 3 }}
                />
              </div>
              <div>
                <p className="mt-3">
                  8900 Penn Ave S, 309, Bloomington, MN 55431
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center" style={{gap: "15px"}}>
              <div className="icongbg">
                {/* <i className="fa fa-clock-o" /> */}
                <i>
                  <LuClock9/>
                </i>
              </div>
              <div>
                <p className="mt-3">
                  Monday - Friday: 09:00 - 20:00
                  <br />
                  Sunday &amp; Saturday: 10:30 - 22:00
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
            <form onSubmit={ContactValueHandler} className="row form-bg">
              <div className="col-md-12">
                <div className="cont-text mb-5">
                  <h2>Contact Form</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fname" className="form-label">
                    Your Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    required=""
                    name="fullName"
                    value={format?.fullName}
                    onChange={handleContactTypeChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="eamil" className="form-label">
                    Your Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required=""
                    name="email"
                    value={format?.email}
                    onChange={handleContactTypeChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="Phonenumber" className="form-label">
                    Your Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="Phonenumber"
                    required=""
                    name="phone"
                    value={format?.phone}
                    onChange={handleContactTypeChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Your Subject <span className="text-danger">*</span>
                  </label>
                  <input type="text"
                   name="Subject"
                   onChange={handleContactTypeChange}
                   value={format?.Subject}
                  className="form-control" id="subject" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label htmlFor="mesaage" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="mesaage"
                    rows={5}
                    defaultValue={""}
                    name="Message"
                    value={format?.Message}
                    onChange={handleContactTypeChange}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="">
                <CustomButton
                      title=" Submit"
                      type="submit"
                      className="btn btn-primary px-4 rounded-1"
                      isLoading={isLoading}
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

export default Contact
