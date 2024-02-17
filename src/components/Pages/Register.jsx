import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MembershipForm from "../Membership/screens/MembershipForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const { authenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      return navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <div className="nav-tab-wrapper tabs section-padding flex items-center justify-center flex-col w-full">
        <div className="my-7 flex items-center flex-col">
          <h4 className="column-title text-center">
            You're One Step Closer To <span className="shape-bg">IEVS</span>
          </h4>
        </div>
        <MembershipForm />
      </div>
      <Footer />
    </>
  );
};

export default Register;
