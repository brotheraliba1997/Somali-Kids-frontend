import React from "react";
import footer from "@/assets/public/images/footer-logo.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-logo">
                <a href="index.html">
                  <Image src={footer} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-menu">
                <h3>Quick Links</h3>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <i>
                      <FaAngleRight style={{ color: "white" }} />
                    </i>
                    <a href="index.html">Home </a>
                  </li>
                  <li>
                    <i>
                      <FaAngleRight style={{ color: "white" }} />
                    </i>
                    <a href="#">About Us </a>
                  </li>
                  <li>
                    <i>
                      <FaAngleRight style={{ color: "white" }} />
                    </i>
                    <a href="#">Services </a>
                  </li>
                  <li>
                    <i>
                      <FaAngleRight style={{ color: "white" }} />
                    </i>
                    <a href="#">Programs </a>
                  </li>
                  <li>
                    <i>
                      <FaAngleRight style={{ color: "white" }} />
                    </i>

                    <a href="#">Contact Us </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-menu">
                <h3>Contact Us </h3>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <i>
                      <RiPhoneFill style={{color: "white"}}/>
                    </i>
                    <a href="#">(612) 205-2351 </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" id="foot-icon" />
                    <a href="#">support@Somaliabckidslearning.com</a>
                  </li>
                  <li>
                   

                    <i>
                      <TiWorld  style={{color: "white"}}/>
                    </i>
                    <a href="#">www.Somaliabckidslearning.com </a>
                  </li>
                  <li>
                <i>
                  <MdLocationOn  style={{color: "white"}}/>
                </i>
                    <a href="#">8900 Penn Ave S, 309, Bloomington, MN 55431 </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bot">
        <div className="container">
          <div className="row">
            <div className="footerb-text">
              <p>Copyright All Rights Reserved © 2024 by Iconic Tek</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
