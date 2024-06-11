import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FeatureStart from "../components/FeatureStart";
import Control from "../components/Control";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Tril from "../components/Tril";
import Package from "../components/Package";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
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
