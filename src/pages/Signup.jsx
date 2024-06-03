import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  error_toaster,
  info_toaster,
  success_toaster,
} from "../utilities/Toaster";
import { PostAPI } from "../utilities/PostAPI";

export default function Signup() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(false);
  const [Otp, setOtp] = useState("");
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    password: "",
    referId: "",
  });
  const onChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const signupFunc = async (e) => {
    e.preventDefault();
    if (signUp.email === "") {
      info_toaster("Please enter Email");
    } else if (signUp.password === "") {
      info_toaster("Please enter Password");
    } else {
      let res = await PostAPI("auth/v1/signup", {
        firstName: signUp.firstName,
        lastName: signUp.lastName,
        email: signUp.email,
        password: signUp.password,
        phoneNum: signUp.phoneNum,
        referId: signUp.referId,
      });
      console.log(res?.data);
      if (res?.data?.status === "1") {
        success_toaster(res?.data?.mesage);
        setTab(true);
        localStorage.setItem("otpId", res?.data?.data?.otpId);
        localStorage.setItem("userId", res?.data?.data?.userId);
        // localStorage.setItem("accessToken", res?.data?.data?.accessToken);
        // navigate("/");
      } else {
        error_toaster(res?.data?.mesage);
      }
    }
  };
  const OtpFunc = async (e) => {
    e.preventDefault();
    if (Otp === "") {
      info_toaster("Please enter OTP");
    } else {
      let res = await PostAPI("auth/v1/verifyOTP", {
        OTP: Otp,
        userId: localStorage.getItem("userId"),
      });
      console.log(res?.data);
      if (res?.data?.status === "2") {
        success_toaster(res?.data?.message);
        localStorage.setItem("name", res?.data?.data?.firstName);
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
                      <Link to={"/"} className="logo-text">
                        EarnBoxe
                      </Link>
                    </div>
                    {tab === !true ? (
                      <form onSubmit={signupFunc}>
                        <div className="form-group d-flex ">
                          <input
                            value={signUp.firstName}
                            onChange={onChange}
                            type="firstName"
                            className="form-control"
                            id="firstName"
                            aria-describedby="firstName"
                            name="firstName"
                            placeholder="Enter First Name"
                            required
                          />

                          <input
                            value={signUp.lastName}
                            onChange={onChange}
                            type="lastName"
                            className="form-control"
                            id="firstName"
                            aria-describedby="lastName"
                            name="lastName"
                            placeholder="Enter Last Name"
                            required
                          />
                        </div>
                        <div>
                          <input
                            value={signUp.email}
                            onChange={onChange}
                            type="email"
                            className="form-control my-3"
                            id="email"
                            aria-describedby="email"
                            name="email"
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                        <div>
                          <input
                            value={signUp.phoneNum}
                            onChange={onChange}
                            type="phoneNum"
                            className="form-control my-3"
                            id="phoneNum"
                            aria-describedby="phoneNum"
                            name="phoneNum"
                            placeholder="Enter Phone Num"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            value={signUp.password}
                            onChange={onChange}
                            type="password"
                            className="form-control my-3"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            value={signUp.referId}
                            onChange={onChange}
                            type="referId"
                            className="form-control"
                            id="referId"
                            name="referId"
                            placeholder="referId"
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-submit"
                        >
                          Sign In
                        </button>
                      </form>
                    ) : (
                      <>
                        <form onClick={OtpFunc}>
                          <div>
                            <div className="form-group">
                              <input
                                value={Otp}
                                onChange={(e) => setOtp(e.target.value)}
                                type="Otp"
                                className="form-control"
                                id="Otp"
                                name="Otp"
                                placeholder="Otp"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary btn-block btn-submit"
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                      </>
                    )}
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
