import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FeatureStart from "../components/FeatureStart";
import Control from "../components/Control";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Tril from "../components/Tril";
import Package from "../components/Package";

export default function Home() {  return (
    <>
      <Navbar />
      <Banner />
      <Package />
      <Control />
      <Feature />
      <FeatureStart />
      <Tril />
      <Footer />
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
}
