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
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Contact Us</Link>
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
                        <Link>Terms of use</Link>
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Refund Policy</Link>
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
                        <Link>EarnBoxe@gmail.com</Link>{" "}
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
                    <Link>EarnBoxe</Link>
                  </p>
                </div>
                <div
                  className="social-style wow fadeInDown"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.5s"
                >
                  <Link>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-google-plus-g"></i>
                  </Link>
                  <Link>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
