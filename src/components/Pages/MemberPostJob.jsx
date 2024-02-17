import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MemberJobPostForm from "../Membership/screens/MemberPostJobForm";

const MemberPostJob = () => {
  return (
    <>
      <Header />
      <div className="nav-tab-wrapper tabs section-padding flex items-center justify-center flex-col w-full">
        <div className="mini-title">Welcome Member!</div>
        <h4 className="column-title">Post A Job</h4>
        <MemberJobPostForm/>
      </div>
      <Footer />
    </>
  );
};

export default MemberPostJob;
