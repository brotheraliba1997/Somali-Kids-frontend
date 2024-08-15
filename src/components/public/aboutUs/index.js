import React from 'react'
import AbtImage from "@/assets/public/images/abt-img.png"
import Image from 'next/image'


function About() {
  return (
    <>
  <div className="pages-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bannertext">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="abthome-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-5 mb-sm-0">
          <div className="abt-img">
          <Image src={AbtImage} alt="AbtImage" />

            {/* <img src="assets/images/abt-img.png" alt="" /> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="abthome-text">
            <h2>About Us</h2>
            <h3>Welcome to ABC Kids Learning!</h3>
            <p>
              At ABC Kids Learning, we are dedicated to providing a fun,
              interactive, and educational environment for young learners. Our
              mission is to make learning the ABCs and foundational skills
              exciting and engaging for children. We believe in fostering a love
              for learning through creative activities, games, and a supportive
              community.
            </p>
            <p>
              Founded by a team of passionate educators and child development
              experts, our platform is designed to cater to the diverse learning
              needs of children aged 3 to 7 years. We understand that every
              child is unique, and our goal is to create an inclusive space
              where every child can thrive and discover the joy of learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mission-section">
    <div className="container">
      <div className="row justify-content-center gap-lg-5">
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="abthome-text">
            <h3>Mission</h3>
            <p>
              Our mission is to inspire a lifelong love of learning in young
              children by providing high-quality, interactive educational
              content that is both engaging and effective. We strive to support
              parents and educators in nurturing children's natural curiosity
              and helping them develop the foundational skills they need for
              future success.
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="abthome-text">
            <h3>Vision</h3>
            <p>
              Our vision is to be a global leader in early childhood education,
              known for our innovative approach to learning and our commitment
              to helping every child reach their full potential. We aim to
              create a world where every child has access to the resources they
              need to develop their skills, confidence, and love for learning.
            </p>
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

export default About