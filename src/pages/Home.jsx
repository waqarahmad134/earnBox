import React from "react";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FeatureStart from "../components/FeatureStart";
import Control from "../components/Control";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Tril from "../components/Tril";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Banner />
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
