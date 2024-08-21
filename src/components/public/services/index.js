import Image from 'next/image'
import React from 'react'
import ser1 from "@/assets/public/images/ser1.png"
import ser2 from "@/assets/public/images/ser2.png"
import ser3 from "@/assets/public/images/ser3.png"
import ser4 from "@/assets/public/images/ser4.png"


function ServicesComponents() {
  return (
    <>
    <div className="pages-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="bannertext">
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="abthome-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <div className="homeser-text">
              <h2>Our Services Include</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div className="d-sm-flex justify-content-between gap-5" style={{gap: "35px"}}>
              <div className="gridimg">
                  <Image src={ser1} alt="ser1" />

              </div>
              <div className="ser-col-text">
                <h3>Interactive Learning Games</h3>
                <p>
                  Our games are designed to make learning letters, numbers, and
                  basic concepts enjoyable and memorable. Each game is crafted to
                  enhance cognitive skills, improve hand-eye coordination, and
                  boost memory retention.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div className="d-sm-flex justify-content-between gap-5" style={{gap: "35px"}}>
              <div className="gridimg">
                  <Image src={ser2} alt="ser2" />

              </div>
              <div className="ser-col-text">
                <h3>Personalized Learning Paths</h3>
                <p>
                  We recognize that each child learns at their own pace. Our
                  personalized learning paths adjust to the child's progress,
                  ensuring they are constantly challenged and motivated.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div className="d-sm-flex justify-content-between gap-5" style={{gap: "35px"}}>
              <div className="gridimg">
          <Image src={ser3} alt="ser2" />

                {/* <img src="assets/images/ser3.png" alt="" /> */}
              </div>
              <div className="ser-col-text">
                <h3>Parent and Teacher Resources</h3>
                <p>
                  We offer a wide range of resources, including lesson plans,
                  activity guides, and printable worksheets, to support parents
                  and teachers in extending the learning experience beyond the
                  screen.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div className="d-sm-flex justify-content-between gap-5" style={{gap: "35px"}}>
              <div className="gridimg">
          <Image src={ser3} alt="ser3" />

                {/* <img src="assets/images/ser3.png" alt="" /> */}
              </div>
              <div className="ser-col-text">
                <h3>Progress Tracking</h3>
                <p>
                  Our platform includes tools for parents and educators to track
                  the progress of each child. Detailed reports and insights help
                  in celebrating achievements and identifying areas where
                  additional support is needed.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className=" d-sm-flex justify-content-between gap-5" style={{gap: "35px"}}>
              <div className="gridimg">
          <Image src={ser4} alt="ser4" />
              
                {/* <img src="assets/images/ser4.png" alt="" /> */}
              </div>
              <div className="ser-col-text">
                <h3>Safe and Secure Environment</h3>
                <p>
                  We prioritize the safety of our young learners. Our platform is
                  designed with strict security measures to ensure a safe online
                  experience for children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="gettouch-section mt-3">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="homeser-text">
              <h2>Get in Touch with Us</h2>
              <h4>
                We are here to support you and your child's learning journey. If
                you have any questions, suggestions, or need assistance, please
                don't hesitate to reach out to us.
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-2 col-sm-3 col-md-3">
            <div className="d-grid">
              <button className="btn public-btn-primary px-4 rounded-pill">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default ServicesComponents
