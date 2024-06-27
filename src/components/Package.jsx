import React, { useState } from "react";
import GetAPI from "../utilities/GetAPI";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { PostAPI } from "../utilities/PostAPI";
import {
  error_toaster,
  info_toaster,
  warning_toaster,
} from "../utilities/Toaster";
export default function Package() {
  const [model, setModel] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentProof, setPaymentProof] = useState([]);
  const { data } = GetAPI("earning/v1/getPackages");
  const paymentMethods = GetAPI("earning/v1/getPaymentMethods");

  const paymentFunc = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("accessToken")) {
      warning_toaster("Please Login First");
    } else {
      const formData = new FormData();
      formData.append("userId", parseInt(localStorage.getItem("userId")));
      formData.append("packageId", selectedPackage);
      formData.append("paymentMethodId", paymentMethod);
      formData.append("paymentProof", paymentProof);
      let res = await PostAPI("earning/v1/selectPackage", formData);
      if (res?.data?.status === "1") {
        info_toaster(res?.data?.message);
        setModel(false);
      } else {
        error_toaster(res?.data?.message);
        setModel(false);
      }
    }
  };
  return (
    <>
      <Modal
        isCentered
        isOpen={model}
        onClose={() => setModel(false)}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pay Now</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Payment Method</option>
                {paymentMethods?.data?.data?.data?.map((data, index) => (
                  <option value={data?.id}>{data?.name}</option>
                ))}
              </select>
            </div>
            <div className="">
              {paymentMethods?.data?.data?.data
                ?.filter(
                  (data) => parseInt(paymentMethod) === parseInt(data?.id)
                )
                .map((data, index) => (
                  <div className="container my-2" key={index}>
                    <div className="row">
                      <div className="col-6">
                        <div>
                          <h4 className="text-primary">Payment Method</h4>
                          <span>{data?.name}</span>
                        </div>
                        <hr />
                        <div>
                          <h4 className="text-primary">Account No</h4>
                          <span className="text-red">{data?.accountNo}</span>
                        </div>
                        <hr />
                      </div>
                      <div className="col-6">
                        <img
                          className="img-fluid m-auto"
                          style={{ height: "200px" }}
                          src={
                            (data.name && data.name.toLowerCase()) === "bitcoin"
                              ? "/img/bitcoin.png"
                              : (data.name && data.name.toLowerCase()) ===
                                "easypaisa"
                              ? "/img/easypaisa.png"
                              : "/img/bank.jpg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      {" "}
                      <span className="text-success">Note:</span>{" "}
                      {data?.note || "Just wait for 24 Hours"}
                    </div>
                  </div>
                ))}
            </div>
            <form onSubmit={paymentFunc}>
              <div className="my-2">
                <label htmlFor="image">
                  <b>Upload Screen-Shot</b>
                  <input
                    onChange={(e) => {
                      setPaymentProof(e.target.files[0]);
                    }}
                    type="file"
                    name="paymentProof"
                    accept="image/*"
                    required
                  />
                </label>
              </div>
              <div>
                <button type="submit" className="btn btn-primary my-2">
                  Submit
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <section className="package" id="plans">
        <title>Pricing component</title>
        <header>
          <h1>Our Pricing</h1>
        </header>
        <div className="cards">
          {data?.data?.map((data, index) => (
            <div
              key={index}
              className={`card ${data?.id === 2 ? "active" : ""}`}
            >
              <ul>
                <li className="pack">{data?.name}</li>
                <li id="professional" className="price bottom-bar">
                 $ {data?.price}
                </li>
                <li className="bottom-bar">
                  Daily Earning <b>&nbsp; ${data?.earn}</b>
                </li>
                <li className="bottom-bar">
                  Package Life &nbsp;<b> {data?.validity} </b>&nbsp; Months
                </li>
                <li className="bottom-bar">
                  Withdraw Threshold <b>&nbsp; $ {data?.withdrawThreshold}</b>
                </li>
                <li className="bottom-bar">
                  Referal Bonus <b>&nbsp;$ {data?.referalBonus}</b>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setModel(true);
                      setSelectedPackage(data?.id);
                    }}
                    className="btn"
                  >
                    Buy Now
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
