import React from "react";
import {
  error_toaster,
  success_toaster,
  warning_toaster,
} from "../utilities/Toaster";

export default function Navbar() {
  return (
    <>
      <div className="mein-menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="fassets/img/logo.png" className="logo" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#features"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sign-in.html">
                    Plans
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register.html">
                    Register
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link button-1" href="login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
