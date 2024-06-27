import React, { useEffect, useState, useCallback } from "react";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import GetAPI from "../utilities/GetAPI";
import { PostAPI } from "../utilities/PostAPI";
import { info_toaster } from "../utilities/Toaster";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

export default function Earn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [countdown, setCountdown] = useState(10);
  console.log(countdown);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const logoutFunc = useCallback(() => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  }, [navigate]);

  const headerStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    background: "linear-gradient(45deg, #903eff 0%, #3e19ff 100%)",
    zIndex: "99",
  };

  const { data, reFetch } = GetAPI(
    `earning/v1/getUserAds/${parseInt(localStorage.getItem("userId") || "0")}`
  );

  const watchAdFunc = useCallback(
    async (id) => {
      try {
        const res = await PostAPI("earning/v1/watchAd", {
          userId: localStorage.getItem("userId"),
          adId: id,
        });
        info_toaster(res?.data?.message);
        if (res?.data?.status === "1") {
          reFetch();
        }
      } catch (error) {
        console.error("Error watching ad:", error);
        info_toaster("An error occurred while watching the ad");
      }
    },
    [reFetch]
  );

  useEffect(() => {
    let timer;
    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, countdown]);

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
                      <Link to={"/profile"} className="nav-link">
                        Hi, {localStorage.getItem("name")}
                      </Link>
                    </li>
                    <li onClick={logoutFunc} className="nav-item">
                      <Link className="nav-link">Logout</Link>
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
          {data?.data?.userData?.paymentStatus ? (
            <>
              {data?.data?.addData?.length > 0 && (
                <h2 className="mb-2">
                  You can <strong style={{ color: "red" }}>trade</strong>{" "}
                  Following
                </h2>
              )}

              <div className="portos">
                {data?.data?.addData?.length > 0 ? (
                  data.data.addData.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="flex flex-justify-between flex-align-center bg-white porto"
                        style={{ cursor: "pointer" }}
                      >
                        <div className="mt-3">
                          <div className="flex flex-align-center flex-justify-between mb-2">
                            <p className="text-xl mr-4">
                              <b>{item.title}</b>
                            </p>
                          </div>
                        </div>
                        <div className="m-auto">
                          <button onClick={onOpen} className="btn btn-primary">
                            Trade
                          </button>
                        </div>
                      </div>
                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>
                            Calculating Trade and Analysis
                          </ModalHeader>
                          <ModalBody>
                            <div>
                              <img
                                className="mx-auto mb-5"
                                src="https://kinsta.com/wp-content/uploads/2020/06/medium-rectangle-1.png"
                                alt="Ad"
                              />
                            </div>
                            {countdown > 0 ? (
                              <h3>Please Wait for {countdown} seconds...</h3>
                            ) : (
                              <div className="mx-auto text-center">
                                <button
                                  onClick={() => {
                                    watchAdFunc(item?.id);
                                    onClose();
                                    setCountdown(10)
                                  }}
                                  className="btn btn-primary"
                                >
                                  Trade Now
                                </button>
                              </div>
                            )}
                          </ModalBody>
                        </ModalContent>
                      </Modal>
                    </>
                  ))
                ) : (
                  <h2 className="mb-2" style={{ whiteSpace: "nowrap" }}>
                    You have successfully{" "}
                    <strong style={{ color: "red" }}>traded</strong> today
                  </h2>
                )}
              </div>
            </>
          ) : (
            <>
              {data.status !== "0" ? (
                <>
                  <h3 className="mb-2">
                    Your account is still
                    <strong style={{ color: "red" }}> pending </strong>from
                    admin side
                  </h3>
                  <p>Verification may take up to 24 hours</p>
                </>
              ) : (
                <h3 className="mb-2">
                  Please Buy the
                  <strong style={{ color: "red" }}> Package </strong> first
                </h3>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
}
