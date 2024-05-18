import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import GetAPI from "../utilities/GetAPI";
import axios from "axios";
import { PostAPI } from "../utilities/PostAPI";
import {
  info_toaster,
} from "../utilities/Toaster";

export default function Earn() {
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  const headerStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    background: "linear-gradient(45deg, #903eff 0%, #3e19ff 100%)",
    zIndex: "99",
  };

  const { data, reFetch } = GetAPI("earning/v1/getUserAds");
  const watchAdFunc = async (e) => {
    e.preventDefault();
    let res = await PostAPI("earning/v1/watchAd", {
      amount: data?.data[0]?.usage === "" ? 1 : data?.data[0]?.usage,
      adId: data?.data[0]?.id === "" ? 1 : data?.data[0]?.id,
    });
    if (res?.data?.status === "1") {
      info_toaster(res?.data?.message);
      reFetch();
    } else {
      info_toaster(res?.data?.message);
    }
  };

  return (
    <>
      <div className="mein-menu" style={headerStyles}>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} className="logo" alt="logo" />
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
                  <Link className="nav-link" to={"/earn"}>
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
      <div
        className="banner"
        id="home"
        style={{ backgroundImage: "url(/img/earn-bg.jpeg)" }}
      ></div>

      <section className="container my-5">
        <div>
            <h2 className="mb-2">You can <strong style={{color: "red"}}>trade</strong>  only once </h2>
          <div className="portos">
            {data?.data?.length > 0 ? (
              data?.data?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-justify-between flex-align-center bg-white porto"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="rounded m-auto"
                    src={data?.image}
                    alt={data?.title}
                  />
                  <div className="mt-3">
                    <div className="flex flex-align-center flex-justify-between mb-2">
                      <p className="text-xl mr-4">
                        <b>{data?.title}</b>
                        {/* <span className="text-gray-500 text-sm"> / USDT</span> */}
                      </p>
                      <p className="text-xl">Earning : $ {data?.usage}</p>
                    </div>
                  </div>
                  <div className="m-auto">
                    <button onClick={watchAdFunc} className="btn btn-primary">
                      Trade {data?.code}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="h3"  style={{ whiteSpace: "nowrap" }}>You have sucessfully traded today</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
}
