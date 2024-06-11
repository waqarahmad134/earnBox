import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GetAPI from "../utilities/GetAPI";
import logo from "../img/logo.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaMoneyBill1Wave,
  FaMoneyBills,
  FaPeopleGroup,
  FaPeopleLine,
} from "react-icons/fa6";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  error_toaster,
  info_toaster,
  success_toaster,
  warning_toaster,
} from "../utilities/Toaster";
import { PostAPI } from "../utilities/PostAPI";

export default function Profile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = GetAPI(
    `earning/v1/dashboard/${parseInt(localStorage.getItem("userId"))}`
  );
  const earningHistory = GetAPI(
    `earning/v1/getEarningHistory/${parseInt(localStorage.getItem("userId"))}`
  );

  const userData = GetAPI(
    `earning/v1/getUserDetails/${parseInt(localStorage.getItem("userId"))}`
  );

  const [updateUserData, setupdateUserData] = useState({
    firstName: userData?.data?.data?.firstName,
    lastName: userData?.data?.data?.lastName,
    email: userData?.data?.data?.email,
    phoneNum: userData?.data?.data?.phoneNum,
    city: userData?.data?.data?.city,
    address: userData?.data?.data?.address,
    dateOfBirth: userData?.data?.data?.dateOfBirth,
    gender: userData?.data?.data?.gender,
    zip: userData?.data?.data?.zip,
    cnic: userData?.data?.data?.cnic,
  });
  const onChange = (e) => {
    setupdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
  };

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    if (updateUserData.city === "") {
      info_toaster("Please enter City");
    } else {
      let res = await PostAPI("earning/v1/updateUserDetails", {
        userId: parseInt(localStorage.getItem("userId")),
        city: updateUserData.city,
        address: updateUserData.address,
        dateOfBirth: updateUserData.dateOfBirth,
        gender: updateUserData.gender,
        zip: updateUserData.zip,
        cnic: updateUserData.cnic,
      });
      if (res?.data?.status === "1") {
        info_toaster(res?.data?.message);
      } else {
        error_toaster(res?.data?.message);
      }
    }
  };

  const logoutFunc = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  };

  const headerStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    background: "linear-gradient(45deg, #903eff 0%, #3e19ff 100%)",
    zIndex: "99",
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Withdraw Earning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              Current Balance:{" "}
              <b>
                ${" "}
                {parseFloat(
                  data?.data?.availableBalance?.availableBalance
                ).toFixed(2) || "0"}
              </b>
            </div>
            <label htmlFor="money">
              Please type how much amount you want to withdraw
            </label>
            <input type="text" id="money" className="form-control" />
          </ModalBody>

          <ModalFooter>
            <button onClick={onClose} className="btn btn-warning">
              Withdraw
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
                  <a className="nav-link active" aria-current="page">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Plans</a>
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
      <section style={{ marginTop: "140px" }}>
        <div id="advertisers" className="advertisers-service-sec pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <FaMoneyBill1Wave />
                  </div>
                  <h3>Today Earning</h3>
                  <h2>$ {data?.data?.todayEarning?.toFixed(2) || "0"}</h2>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <FaMoneyBills />
                  </div>
                  <h3>Total Earning</h3>
                  <h2>$ {data?.data?.totalEarning?.toFixed(2) || "0"}</h2>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <FaPeopleGroup />
                  </div>
                  <h3>Total Referal</h3>
                  <h2>{data?.data?.totalRefers || "0"}</h2>
                </div>
              </div>
              <div className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <FaPeopleLine />
                  </div>
                  <h3>Active Referal</h3>
                  <h2>{data?.data?.activeRefers?.length || "0"}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card sticky">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbEsykx-0fhTred6UwHDYtMFd2UgTJCG4gaklT1dx4suRO4_n5LJr4Gg28kquSX5fpNo&usqp=CAU"
                      alt="Admin"
                      className="rounded-circle p-1 bg-warning"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>
                        {userData?.data?.data?.firstName +
                          userData?.data?.data?.lastName}
                      </h4>
                      <p className="text-secondary mb-1">
                        {userData?.data?.data?.phoneNum}
                      </p>
                      <p className="text-muted font-size-sm">
                        {userData?.data?.data?.email}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <button onClick={onOpen} className="btn btn-secondary">
                        Withdraw
                      </button>
                    </div>
                  </div>
                  <div className="list-group list-group-flush text-center my-4">
                    <button
                      className={` ${
                        tab === "profile" ? "bg-primary text-white" : ""
                      } list-group-item list-group-item-action border-0`}
                      onClick={() => setTab("profile")}
                    >
                      Profile Information
                    </button>
                    <button
                      className={` ${
                        tab === "package" ? "bg-primary text-white" : ""
                      } list-group-item list-group-item-action border-0`}
                      onClick={() => setTab("package")}
                    >
                      Package Details
                    </button>
                    <button
                      className={` ${
                        tab === "earning" ? "bg-primary text-white" : ""
                      } list-group-item list-group-item-action border-0`}
                      onClick={() => setTab("earning")}
                    >
                      Earning History
                    </button>
                    <button
                      className={` ${
                        tab === "refer" ? "bg-primary text-white" : ""
                      } list-group-item list-group-item-action border-0`}
                      onClick={() => setTab("refer")}
                    >
                      Refer
                    </button>
                    <button
                      onClick={logoutFunc}
                      className="list-group-item list-group-item-action border-0"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {tab === "profile" && (
                <form className="card">
                  <div className="card-body">
                    <h5>Profile Information</h5>
                    <div className="row my-3">
                      <div className="col">
                        <label htmlFor="">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.firstName}
                          disabled
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.lastName}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col">
                        <label htmlFor="">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.email}
                          disabled
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData.phoneNum}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col">
                        <label htmlFor="">City</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData.city}
                          onChange={onChange}
                          name="city"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.address}
                        />
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col">
                        <label htmlFor="">DOB</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.dateOfBirth}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.gender}
                        />
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col">
                        <label htmlFor="">CNIC</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.cnic}
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          value={updateUserData?.zip}
                        />
                      </div>
                    </div>
                    <div className="my-4">
                      <button
                        onClick={handleUserUpdate}
                        className="btn bg-primary text-white"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              )}
              {tab === "package" && (
                <div className="card">
                  <div className="card-body p-0 table-responsive">
                    <h4 className="p-3 mb-0">Product Description</h4>
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Description</th>
                          <th scope="col"></th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt="product"
                              className=""
                              width="80"
                            />
                          </th>
                          <td>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolorem, facilis.
                          </td>
                          <td>₹100 X 2</td>
                          <td>
                            <strong>₹200</strong>
                          </td>
                          <td>
                            <span className="badge badge-warning">PENDING</span>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan="3">
                            <span>Status:</span>
                            <span className="badge badge-success">PAID</span>
                          </th>
                          <td>
                            <span className="text-muted">Total Price</span>
                            <strong>₹200</strong>
                          </td>
                          <td>
                            <span className="text-muted">Total Paid</span>
                            <strong>₹200</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {tab === "earning" && (
                <div className="card">
                  <div className="card-body">
                    <h5>Earning History</h5>
                    <DataTable
                      value={earningHistory?.data?.data?.history}
                      paginator
                      rows={10}
                      rowsPerPageOptions={[5, 10, 25, 50]}
                      className="border"
                    >
                      <Column
                        header="#"
                        body={(rowData, rowIndex) => {
                          return <span>{rowIndex?.rowIndex + 1}</span>;
                        }}
                        className="border px-3"
                      ></Column>
                      <Column
                        field="amount"
                        header="Amount"
                        className="border px-3"
                      ></Column>
                      <Column
                        field="paid"
                        header="Paid"
                        body={(rowData) =>
                          rowData.paid === null ? "Yes" : "No"
                        }
                        className="border px-3"
                      ></Column>
                      <Column
                        field="createdAt"
                        header="Earning Time"
                        body={(rowData) =>
                          moment(rowData.createdAt).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )
                        }
                        className="border px-3"
                      ></Column>
                    </DataTable>
                  </div>
                </div>
              )}
              {tab === "refer" && (
                <div className="card">
                  <div className="card-body">
                    <h5>Refer</h5>
                    <input
                      type="text"
                      className="form-control"
                      value={userData?.data?.data?.referId}
                      disabled
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
