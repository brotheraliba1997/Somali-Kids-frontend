import React from "react";

function PublicHome() {
  return (
    <>
    
      <div className="slider-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-12 pb-5 pb-sm-0">
              <div className="header-text">
                <h1>Somali ABC</h1>
                <p>
                  We are dedicated to providing a fun, interactive, and
                  educational environment for young learners.
                </p>
                <button className="btn btn-danger px-5 rounded-pill">
                  Join Us
                </button>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="sliderimg">
                <img src="assets/images/slider-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abthome-section">
        <div className="container">
          <div className="row align-items-center">
            <div className=" position-relative d-none d-sm-block">
              <div className="abt-sideimg text-center position-absolute end-0 ">
                <img src="assets/images/abt-sideimg.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5 ms-sm-0">
              <div className="abt-img">
                <img src="assets/images/abt-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="abthome-text">
                <h2>About Us</h2>
                <h3>Welcome to ABC Kids Learning!</h3>
                <p>
                  At ABC Kids Learning, we are dedicated to providing a fun,
                  interactive, and educational environment for young learners.
                  Our mission is to make learning the ABCs and foundational
                  skills exciting and engaging for children. We believe in
                  fostering a love for learning through creative activities,
                  games, and a supportive community.
                </p>
                <button className="btn btn-primary px-4 rounded-pill">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="serhom-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="homeser-text">
                <h2>Services</h2>
                <h3>Our Services Include</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-4 mb-3 mb-sm-5">
              <div className="col-bg d-md-flex justify-content-between gap-3">
                <div className="gridimg">
                  <img src="assets/images/icon-1.png" alt="" />
                </div>
                <div className="ser-col-text">
                  <h3>Interactive Learning Games</h3>
                  <p>
                    Our games are designed to make learning letters, numbers,
                    and basic concepts enjoyable and memorable.
                  </p>
                </div>
              </div>
              <div className=" position-relative d-none d-sm-block">
                <div className="serv-sideimg position-absolute bottom-0 start-0 ">
                  <img src="assets/images/col-1icon-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-4 mb-3 mb-sm-5">
              <div className="col-bg d-md-flex justify-content-between gap-3">
                <div className="gridimg">
                  <img src="assets/images/icon-2.png" alt="" />
                </div>
                <div className="ser-col-text">
                  <h3>Personalized Learning Paths</h3>
                  <p>
                    Our personalized learning paths adjust to the child's
                    progress, ensuring they are constantly...
                  </p>
                </div>
              </div>
              <div className=" position-relative d-none d-sm-block">
                <div className="serv-sideimg position-absolute bottom-0 start-0 ">
                  <img src="assets/images/col-2icon-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-4 mb-3 mb-sm-5">
              <div className="col-bg d-md-flex justify-content-between gap-3">
                <div className="gridimg">
                  <img src="assets/images/icon-3.png" alt="" />
                </div>
                <div className="ser-col-text">
                  <h3>Parent and Teacher Resources</h3>
                  <p>
                    We support parents and teachers in extending the learning
                    experience beyond the screen.
                  </p>
                </div>
              </div>
              <div className=" position-relative d-none d-sm-block">
                <div className="serv-sideimg position-absolute bottom-0 start-0 ">
                  <img src="assets/images/col-3icon3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className=" col-sm-3 col-md-3">
              <div className="d-grid">
                <button className="btn btn-primary px-4 rounded-pill">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abthome-section">
        <div className="container">
          <div className="row mb-3 mb-sm-5">
            <div className=" position-relative d-none d-sm-block">
              <div className="prog-sideimg text-center position-absolute start-0 ">
                <img src="assets/images/img-1.png" alt="" />
              </div>
            </div>
            <div className=" position-relative d-none d-sm-block">
              <div className="prog-sideimg text-center position-absolute end-0 ">
                <img src="assets/images/img-2.png" alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="homeser-text">
                <h2>Programs</h2>
                <h3>Our Learning Programs</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3 mb-sm-5">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-5 mb-sm-0">
              <div className="prog-colbg1">
                <div className="progimgcol text-center mb-3">
                  <img src="assets/images/proimg-1.png" alt="" />
                </div>
                <div className="pro-coltext">
                  <h3>ABC Adventures</h3>
                  <p>
                    This program introduces children to the alphabet through fun
                    stories, songs, and interactive activities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-5 mb-sm-0">
              <div className="prog-colbg2">
                <div className="progimgcol text-center mb-3">
                  <img src="assets/images/proimg-2.png" alt="" />
                </div>
                <div className="pro-coltext">
                  <h3>123 Numbers</h3>
                  <p>
                    Focused on basic math skills, this program helps children
                    understand numbers, counting, and simple arithmetic
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-5 mb-sm-0">
              <div className="prog-colbg3">
                <div className="progimgcol text-center mb-3">
                  <img src="assets/images/proimg-3.png" alt="" />
                </div>
                <div className="pro-coltext">
                  <h3>Reading Rockets</h3>
                  <p>
                    Designed to develop early reading skills, this program
                    includes phonics, sight words, and beginner reading <br />
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-3 mb-sm-0">
            <div className="col-lg-3 col-sm-3 col-md-3">
              <div className="d-grid">
                <button className="btn btn-primary px-4 rounded-pill">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="age-section">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className=" position-relative d-none d-sm-block">
              <div className="abt-sideimg position-absolute start-0 ">
                <img src="assets/images/ageimg.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="homeser-text">
                <h2>Ages We Meet Kids Where They Are</h2>
                <p>
                  Explore all of our courses and pick your suitable ones to
                  enroll and start learning with us! We ensure that you will
                  never regret it!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-md-3">
              <div className="text-center mb-3">
                <img src="assets/images/age-1.png" alt="" />
              </div>
              <div className="agesec-text">
                <h3>Infants</h3>
                <h4>3 - 12 Months</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3">
              <div className="text-center mb-3">
                <img src="assets/images/age-2.png" alt="" />
              </div>
              <div className="agesec-text">
                <h3>Toddler</h3>
                <h4>1 - 3 Years</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3">
              <div className="text-center mb-3">
                <img src="assets/images/age-3.png" alt="" />
              </div>
              <div className="agesec-text">
                <h3>Preschool</h3>
                <h4>3 - 5 Years</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 col-md-3">
              <div className="text-center mb-3">
                <img src="assets/images/age-4.png" alt="" />
              </div>
              <div className="agesec-text">
                <h3>Flex-Care</h3>
                <h4>5 - 12 Years</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abthome-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
              <div className="homeser-text">
                <h2>Why Choose Us</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Expertly Designed Curriculum</h3>
                <p>
                  Our content is created by experienced educators and child
                  development experts, ensuring that it is both educationally
                  sound and engaging.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Interactive and Fun</h3>
                <p>
                  We believe learning should be fun. Our interactive games and
                  activities make education exciting, keeping children motivated
                  and eager to learn.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Personalized Learning</h3>
                <p>
                  Every child is unique, and so is their learning journey. Our
                  personalized learning paths adapt to each child's needs and
                  progress.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Comprehensive Resources</h3>
                <p>
                  From interactive games to printable worksheets, we provide a
                  wide range of resources to support children's learning both
                  online and offline.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Safe Environment</h3>
                <p>
                  We prioritize the safety and privacy of our young learners,
                  ensuring a secure and trustworthy online experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
              <div className="choos-text">
                <h3>Progress Tracking</h3>
                <p>
                  Our tools for progress tracking help parents and educators
                  monitor and celebrate children's achievements, as well as
                  identify areas where additional support is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gettouch-section">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className=" position-relative d-none d-sm-block">
              <div className="abt-sideimg text-center position-absolute start-0 ">
                <img src="assets/images/whych01.png" alt="" />
              </div>
            </div>
            <div className=" position-relative d-none d-sm-block">
              <div className="abt-sideimg text-center position-absolute end-0 ">
                <img src="assets/images/whych02.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-12">
              <div className="homeser-text">
                <h2>Get in Touch with Us</h2>
                <h4>
                  We are here to support you and your child's learning journey.
                  If you have any questions, suggestions, or need assistance,
                  please don't hesitate to reach out to us.
                </h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-3 col-md-3">
              <div className="d-grid">
                <button className="btn btn-primary px-4 rounded-pill">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicHome;
