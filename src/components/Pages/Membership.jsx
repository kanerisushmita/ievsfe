import React, { useEffect } from "react";
import About from "../About";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Brands from "../Brands";
import Courses from "../Courses";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import NewsLetter from "../NewsLetter";
import Platform from "../Platform";
import Team from "../Team";
import Testimonials from "../Testimonials";
import Topics from "../Topics";
import LaunchVideo from "../LaunchVideo";
import MembershipOptions from "../MembershipOptions";
import { useSelector } from "react-redux";
import Accordion from "../HomeThreeComponents/Accordion";
import MemberBenefits from "./MemberBenefits";
import PageBanner from "../PageBanner";

const Membership = () => {
  const userDetails = useSelector((state) => state.user);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <PageBanner title={"Membership"} pageTitle='Membership'/>
      <MemberBenefits/>
      <MembershipOptions />
      <Footer />
    </>
  );
};

export default Membership;
