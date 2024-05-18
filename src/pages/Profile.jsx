import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GetAPI from "../utilities/GetAPI";

export default function Profile() {
  const { data, reFetch } = GetAPI("earning/v1/dashboard");
  console.log(data?.data)
  return (
    <div>
      <Navbar />
      <div
        className="banner"
        id="home"
        style={{ backgroundImage: "url(/img/profile-bg.jpg)" }}
      ></div>
      <div className="container my-5">
        <div class="row my-5">
          <div class="col">
            <div class="card">
              <h5 class="card-header">Today Earning</h5>
              <div class="card-body">
                <h5 class="card-title">{data?.data?.todayEarning?.amount}</h5>
                {/* <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h5 class="card-header">Total Earning</h5>
              <div class="card-body">
                <h5 class="card-title">
                  {data?.data?.totalEarning} <b className="h6">(Withdraw active 50$)</b>{" "}
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h5 class="card-header">Total Referal</h5>
              <div class="card-body">
                <h5 class="card-title">{data?.data?.totalRefers}</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h5 class="card-header">Active Referal</h5>
              <div class="card-body">
                <h5 class="card-title">{data?.data?.activeRefers?.length }</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h5 class="card-header">Referal Earning</h5>
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">$ {data?.data?.activeRefers?.length * 5} </h5>
                  <button class="btn btn-primary">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
