import React from "react";
import { useSelector } from "react-redux";

const AuthRoute = ({ Element }) => {
  const { authenticated } = useSelector((state) => state.user);

  return authenticated ? <Element /> : window.location.href = "/login";
};

export default AuthRoute;
