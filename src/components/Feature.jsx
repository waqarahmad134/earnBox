import React from "react";

export default function Feature() {
  return (
    <div>
      <div className="feature one" id="features">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-7 col-lg-6 d-none d-lg-block">
              <div
                className="pic wow fadeInLeft"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
              >
                <img
                  src="fassets/img/feature-img-1.png"
                  alt=""
                  className="feature-img"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-lg-6">
              <div className="section-head">
                <h2
                  className="title wow fadeInDown"
                  data-wow-duration="0.3s"
                  data-wow-delay="0.3s"
                >
                  {" "}
                  Multiple Payments Easier On One Platform.
                </h2>
                <p
                  className="text wow fadeInDown"
                  data-wow-duration="0.3s"
                  data-wow-delay="0.3s"
                >
                  Earn Boxe provide different ways of earning money online. Main
                  work you can do is to watch ads and earn money as fast you
                  need according your package plan purchased. You need daily
                  some clicks to view ads and will get a good revenue!
                </p>
                <ul className="list">
                  <li
                    className="list-item wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <img src="fassets/img/licon-1.png" alt="" />
                    </span>
                    <div className="content">
                      <h3 className="subtitle">Secure Payments</h3>
                      <p className="text">100% Secure Investments</p>
                    </div>
                  </li>
                  <li
                    className="list-item wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <img src="fassets/img/licon-2.png" alt="" />
                    </span>
                    <div className="content">
                      <h3 className="subtitle">Transaction Anywhere Any Time</h3>
                      <p className="text">
                        24 Hours Withdraw And Deposit Service On
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
