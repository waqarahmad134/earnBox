import React from "react";

export default function Banner() {
  return (
    <div>
      <div
        className="banner"
        id="home"
        style={{ backgroundImage: "url(/img/banner-bg.png)" }}
        >
        <img className="bg-sape" src="/img/banner-bg-2.png" alt="" />
        <div className="tree-1">
          <img src="/img/tree1.png" alt="" />
        </div>
        <div className="tree-2">
          <img src="/img/tree2.png" alt="" />
        </div>
        <div className="hero-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-6 col-xl-7 col-lg-10">
                <div className="banner-content">
                  <h1
                    className="head wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    Powering Secure Payments and Global Finance
                  </h1>
                  <p
                    className="text wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    1 Trade Price under $1.5. EarnBoxe is the best Earning
                    platform to make secure and fast
                  </p>
                  <a
                    href="login.html"
                    className="button button-1 wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    Login
                  </a>

                  <a
                    href="register.html"
                    className="button button-1 wow fadeInDown mt-3"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
