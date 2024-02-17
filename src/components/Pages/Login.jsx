import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import LoginForm from "../Membership/screens/LoginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
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
          <div className="mini-title">Welcome again!</div>
          <h4 className="column-title">Login to your account</h4>
        </div>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
