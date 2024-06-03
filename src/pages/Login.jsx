import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  error_toaster,
  info_toaster,
} from "../utilities/Toaster";
import { PostAPI } from "../utilities/PostAPI";

export default function Login() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const loginFunc = async (e) => {
    e.preventDefault();
    if (signUp.email === "") {
      info_toaster("Please enter Email");
    } else if (signUp.password === "") {
      info_toaster("Please enter Password");
    } else {
      let res = await PostAPI("auth/v1/signin", {
        email: signUp.email,
        password: signUp.password,
      });
      console.log(res?.data)
      if (res?.data?.status === "1") {
        info_toaster(res?.data?.message);
        localStorage.setItem("accessToken", res?.data?.data?.accessToken);
        navigate("/");
      } else {
        error_toaster(res?.data?.message);
      }
    }
  };
  return (
    <section className="login">
      <div className="connect-container align-content-stretch d-flex flex-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="auth-form">
                <div className="row">
                  <div className="col">
                    <div className="logo-box">
                      <Link to="/" className="logo-text">
                        EarnBoxe
                      </Link>
                    </div>
                    <form onSubmit={loginFunc}>
                      <div className="form-group">
                        <input
                          type="email"
                          value={signUp.email}
                          onChange={onChange}
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          value={signUp.password}
                          onChange={onChange}
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-submit"
                      >
                        Sign In
                      </button>
                      <div className="auth-options">
                        <div className="custom-control custom-checkbox form-group">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck1"
                          >
                            Remember me
                          </label>
                        </div>
                        {/* <a href="#" className="forgot-link">
                          Forgot Password?
                        </a> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block d-xl-block">
              <div
                className="auth-image"
                style={{
                  backgroundImage: "url(/dassets/images/login_purple.svg)",
                  backgroundSize: "90% 70%",
                }}
              >
                <img
                  className="img-fluid"
                  src="/dassets/images/login_purple.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
