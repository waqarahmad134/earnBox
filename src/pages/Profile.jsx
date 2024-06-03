import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GetAPI from "../utilities/GetAPI";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";

export default function Profile() {
  const { data } = GetAPI(
    `earning/v1/dashboard/${parseInt(localStorage.getItem("userId"))}`
  );
  const earningHistory = GetAPI(
    `earning/v1/getEarningHistory/${parseInt(localStorage.getItem("userId"))}`
  );
  console.log(earningHistory?.data?.data?.history);
  return (
    <div>
      <Navbar />
      <div
        className="banner"
        id="home"
        style={{ backgroundImage: "url(/img/profile-bg.jpg)" }}
      ></div>
      <div className="container my-5">
        <div className="row my-5">
          <div className="col">
            <div className="card">
              <h5 className="card-header">Today Earning</h5>
              <div className="card-body">
                <h5 className="card-title">
                  {data?.data?.todayEarning || "0"}
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-header">Total Earning</h5>
              <div className="card-body">
                <h5 className="card-title">
                  {data?.data?.totalEarning || "0"}
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-header">Total Referal</h5>
              <div className="card-body">
                <h5 className="card-title">{data?.data?.totalRefers || "0"}</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-header">Active Referal</h5>
              <div className="card-body">
                <h5 className="card-title">
                  {data?.data?.activeRefers?.length || "0"}
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h5 className="card-header">Available Balance</h5>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">
                    {parseFloat(
                      data?.data?.availableBalance?.availableBalance
                    ).toFixed(2) || "0"}
                  </h5>
                  <button className="btn btn-primary">Withdraw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <DataTable
            value={earningHistory?.data?.data?.history}
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              header="No #"
              style={{ width: "10%" }}
              body={(rowData, rowIndex) => {
                return <span>{rowIndex?.rowIndex + 1}</span>;
              }}
              ></Column>
              <Column
                field="amount"
                header="Amount"
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="paid"
                header="Paid"
                style={{ width: "25%" }}
                body={(rowData) => (rowData.paid === null ? "Yes" : "No")}
              ></Column>
            <Column
              field="createdAt"
              header="Earning Time"
              style={{ width: "25%" }}
              body={(rowData) =>
                moment(rowData.createdAt).format("YYYY-MM-DD HH:mm:ss")
              }
            ></Column>
          </DataTable>
        </div>
      </div>
      <Footer />
    </div>
  );
}
