import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MatchesProfileView from "./MatchesProfileView";
import PageBanner from "../PageBanner";

const MatchesProfile = () => {

  return (
    <>
      <Header stickActive={true} />
      <PageBanner title={"Matched Member Profile"} pageTitle="Profile" />
        <MatchesProfileView  />
      <Footer />
    </>
  );
};

export default MatchesProfile;
