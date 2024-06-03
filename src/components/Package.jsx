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
import { error_toaster, info_toaster } from "../utilities/Toaster";
export default function Package() {
  const [model, setModel] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  console.log("🚀 ~ Package ~ selectedPackage:", selectedPackage)
  const [paymentProof, setPaymentProof] = useState([]);
  console.log("🚀 ~ Package ~ paymentProof:", paymentProof)
  const { data } = GetAPI("earning/v1/getPackages");

  const paymentFunc = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userId", parseInt(localStorage.getItem("userId")));
    formData.append("packageId", selectedPackage);
    formData.append("paymentProof", paymentProof);
    let res = await PostAPI("earning/v1/selectPackage", formData);
    if (res?.data?.status === "1") {
      info_toaster(res?.data?.message);
      setModel(false);
    } else {
      error_toaster(res?.data?.message);
      setModel(false);
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
            <div className="">
              <img
                className="m-auto"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <form onSubmit={paymentFunc}>
              <div className="my-2">
                <label htmlFor="image">
                  <b>Upload TRX Screen-Shot</b>
                  <input
                    onChange={(e) => {
                      setPaymentProof(e.target.files[0]);
                    }}
                    type="file"
                    name="paymentProof"
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
            <div className={`card ${data?.id === 2 ? "active" : ""}`}>
              <ul>
                <li className="pack">{data?.name}</li>
                <li id="professional" className="price bottom-bar">
                  {data?.price}
                </li>
                <li className="bottom-bar">
                  Daily Earning <b>&nbsp; ${data?.earn}</b>
                </li>
                <li className="bottom-bar">
                  Package Life <b>&nbsp; {data?.validity}</b>
                </li>
                <li className="bottom-bar">
                  Withdraw Threshold <b>&nbsp; $50</b>
                </li>
                <li className="bottom-bar">
                  Referal Bonus <b>&nbsp; {data?.referalBonus}</b>
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
