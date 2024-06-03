import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-md-6 wow fadeInDown"
              data-wow-duration="0.3s"
              data-wow-delay="0.3s"
            >
              <div className="footer-box">
                <div className="logo">
                  <img src="/img/logoi.png" alt="" />
                </div>
                <p className="text">
                  Earn Boxe Team Provides Customer Care Support Through Email.
                </p>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-box">
                    <h3 className="subtitle">Company</h3>
                    <ul className="footer-link">
                      <li>
                        <a href="javascript:void(0);">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-box">
                    <h3 className="subtitle">Policy</h3>
                    <ul className="footer-link">
                      <li>
                        <a href="javascript:void(0);">Terms of use</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Refund Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInDown"
                  data-wow-duration="0.7s"
                  data-wow-delay="0.7s"
                >
                  <div className="footer-box">
                    <h3 className="subtitle">Contacts</h3>
                    <ul className="footer-link">
                      <li>
                        {" "}
                        <a href="javascript:void(0);">EarnBoxe@gmail.com</a>{" "}
                      </li>
                      <li> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="footer-bottom">
                <div
                  className="content wow fadeInDown"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.5s"
                >
                  <p className="text">
                    Copyright &copy; 2023. All Rights Reserved By{" "}
                    <a href="javascript:void(0);">EarnBoxe</a>
                  </p>
                </div>
                <div
                  className="social-style wow fadeInDown"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.5s"
                >
                  <a href="javascript:void(0);">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
