import React from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import Accordion from "../HomeThreeComponents/Accordion";
import Team from "../HomeThreeComponents/Team";
import About from "../HomeTwoComponents/About";
import FoundingMembers from "../HomeTwoComponents/FoundingMembers";
import HonoraryMembers from "../HomeTwoComponents/HonoraryMembers";
import Counter from "../HomeTwoComponents/Counter";
import PageBanner from "../PageBanner";
import Testimonials from "../Testimonials";
import About_us from "../About_us";

const AboutOne = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} pageTitle="About Us" num={1} />
      <About />
      <About_us/>
      <FoundingMembers/>
      <HonoraryMembers/>
      {/* <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <Accordion /> */}
      <Footer />
    </>
  );
};

export default AboutOne;
