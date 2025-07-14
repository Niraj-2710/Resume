import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;