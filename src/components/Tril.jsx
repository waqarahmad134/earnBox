import React from "react";

export default function Tril() {
  return (
    <div>
      <div className="tril" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="content"
                style={{ backgroundImage: "url(/fassets/img/free-tril.png)" }}
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
                      <a
                        href="register.html"
                        className="button button-1 wow fadeInDown"
                        data-wow-duration="0.4s"
                        data-wow-delay="0.5s"
                      >
                        {" "}
                        Sign up Now
                      </a>
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
