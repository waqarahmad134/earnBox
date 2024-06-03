import React from "react";

export default function FeatureStart() {
  return (
    <div>
      <div className="feature two">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-5 col-lg-6">
              <div className="section-head">
                <ul className="list">
                  <li
                    className="list-item wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <img src="/img/licon-3.png" alt="" />
                    </span>
                    <div className="content">
                      <h3 className="subtitle">Total Control Over Spending</h3>
                      <p className="text">
                        Mange a clear view to control your spending
                      </p>
                    </div>
                  </li>
                  <li
                    className="list-item wow fadeInDown"
                    data-wow-duration="0.3s"
                    data-wow-delay="0.3s"
                  >
                    <span className="icon">
                      <img src="/img/licon-4.png" alt="" />
                    </span>
                    <div className="content">
                      <h3 className="subtitle">Accounts Payable</h3>
                      <p className="text">Get your Pay one time in Dollars</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7  col-lg-6 d-none d-lg-block">
              <div
                className="pic wow fadeInRight"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
              >
                <img
                  src="/img/feature-img-2.png"
                  alt=""
                  className="feature-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
