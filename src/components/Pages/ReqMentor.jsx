import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ReqMentorForm from "../Membership/screens/ReqMentorForm";

const ReqMentor = () => {
    return(
        <>
            <Header/>
            <div className="nav-tab-wrapper tabs section-padding flex items-center justify-center flex-col w-full">
                <div className="mini-title">Welcome Member!</div>
                <h4 className="column-title">Request for Mentor</h4>
                <ReqMentorForm/>
            </div>
            <Footer />
        </>
    );
};

export default ReqMentor;