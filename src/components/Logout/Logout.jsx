import React, { useEffect } from "react";
import { logout } from "../../apis/auth";
import { getLocalStorageValue } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import Toast from "../../utils/Toast";
import { logoutUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let accesstoken = getLocalStorageValue("accesstoken");
    let axiosHeaders = {
      headers: {
        authorization: accesstoken,
      },
    };
    logout(axiosHeaders, { withCredentials: true })
      .then((res) => {
        if (res.success) {
          Toast("Logged out successfully", "success");
          dispatch(logoutUser());
          navigate("/login");
        }
      })
      .catch((err) => {
        navigate(-1);
        console.log(err);
      });
  }, []);

  return <></>;
}

export default Logout;
