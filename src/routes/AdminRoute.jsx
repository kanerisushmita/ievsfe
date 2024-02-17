import React from "react";
import { useSelector } from "react-redux";
import Toast from "../utils/Toast";

const AdminRoute = ({ Element }) => {
  const { authenticated, data } = useSelector((state) => state.user);

  let isAuthorized = authenticated && data?.role === "ADMIN";

  if (isAuthorized) {
    return <Element />
  } else {
    Toast("You're not authorized to access this page!");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
    return (<></>);
  }
};

export default AdminRoute;
