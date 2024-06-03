import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <>
      <div className="mein-menu">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} className="logo h-5"  alt="logo" />
            </Link>
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
                  <a className="nav-link" href="#plans">
                    Plans
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/earn'}>
                    Earn
                  </Link>
                </li>
                {!localStorage.getItem("accessToken") ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/signup"}>
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link button-1" to={"/login"}>
                        Login
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to={'/profile'} className="nav-link">
                        Hi, {localStorage.getItem("name")}
                      </Link>
                    </li>
                    <li onClick={logoutFunc} className="nav-item">
                      <a className="nav-link">Logout</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
