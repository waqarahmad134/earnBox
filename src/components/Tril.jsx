import React from "react";
import { Link } from "react-router-dom";

export default function Tril() {
  return (
    <div>
      <div className="tril" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="content"
                style={{ backgroundImage: "url(/img/free-tril.png)" }}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <div className="section-head">
                      <h2
                        className="title wow fadeInDown"
                        data-wow-duration="0.4s"
                        data-wow-delay="0.5s"
                      >
                        {" "}
                        Now it's time to switch old ways to track expenses
                        smarter
                      </h2>
                      <p
                        className="text wow fadeInDown"
                        data-wow-duration="0.4s"
                        data-wow-delay="0.5s"
                      >
                        What are you waiting for? It's time to get started.{" "}
                      </p>
                      <Link
                        to={'/login'}
                        className="button button-1 wow fadeInDown"
                        data-wow-duration="0.4s"
                        data-wow-delay="0.5s"
                      >
                        {" "}
                        Sign up Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
