import React, { useState, useRef, useEffect } from "react";
import { verifyOtp, requestOtp } from "../../../apis/member";
import Toast from "../../../utils/Toast";
import {
  getLocalStorageValue,
  removeLocalStorage,
  setLocalStorage,
} from "../../../utils/helper";

const OTPBox = ({ handleStepChange }) => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [attempts, setAttempt] = useState(0);
  const verifyBtn = useRef(null);
  const otpInput = useRef(null);
  const { email } = getLocalStorageValue("ievs_member_details")
    ? JSON.parse(getLocalStorageValue("ievs_member_details"))
    : { email: "" };

  useEffect(() => {
    if (getLocalStorageValue("ievs_otp_token")) {
    } else {
      handleStepChange(1);
    }
  }),
    [getLocalStorageValue("ievs_otp_token")];

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    var numbers = /^[0-9 . ]$/;
    if (element.value.length > 1 && element.value.length !== 1) {
      element.value = element.value.substring(0, 1);
    }
    if (element.value === "") {
      setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    } else if (!numbers.test(element.value)) {
      Toast("Only numbers are allowed", "error");
      element.value = "";
      element.focus();
    } else {
      setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (event) => {
    if (attempts < 3) {
      setAttempt(attempts + 1);
      verifyBtn.current.disabled = true;

      const data = {
        email: email,
        otp: otp.toString().replaceAll(",", ""),
      };

      verifyOtp(data)
        .then((res) => {
          if (res.data.message === "OTP Expired")
            Toast("OTP Expired, try again.", "error");
          else if (res.data.message === "Please enter valid OTP")
            Toast("Invalid OTP", "error");
          else if (res.data.message === "Verified") {
            verifyBtn.current.disabled = false;
            removeLocalStorage("ievs_otp_token");
            setLocalStorage(
              "ievs_otp_token_verified",
              res.data.ievs_otp_token_verified
            );
            handleStepChange(3);
          } else Toast("OTP Expired, try again.", "error");
        })
        .catch((error) => {
          console.log(error);
          Toast(error.response.data.message, "error");
          verifyBtn.current.disabled = false;
        });
    } else {
      Toast(
        "Verification attempts limit reached. Please try again in 30 seconds",
        "error"
      );
      verifyBtn.current.disabled = true;
      otpInput.current.disabled = true;
      setTimeout(() => {
        verifyBtn.current.disabled = false;
        otpInput.current.disabled = false;
      }, 30000);
    }
  };

  return (
    <form>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-4 text-center">
          <p>
            Enter the OTP sent to <b>{email}</b>
          </p>
          <p style={{ color: "rgb(255, 126, 132)" }}>
            If not received, check in spam or click on resend
          </p>
          <div className="flex mx-auto items-center justify-center">
            {otp.map((data, index) => (
              <input
                className="otp font-bold"
                type="number"
                name="otp"
                maxLength="1"
                ref={otpInput}
                style={{
                  width: "10%",
                  borderRadius: "5px",
                  padding: "2%",
                  marginRight: "5%",
                  paddingLeft: "3%",
                  border: "thin",
                  outline: "none",
                  boxShadow: "rgb(255, 126, 132) 0px 0px 0px 1px",
                }}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
            <button
              className="btn btn-black btn-md mt-[10px]"
              id="verify"
              onClick={handleSubmit}
              ref={verifyBtn}
            >
              Verify
            </button>
            <br />
            <br />
            <p id="error" style={{ color: "red" }}>
              {error}
            </p>
          </div>
          <p>OTP Entered - {otp.join("")}</p>
        </div>
      </div>
      <br />
      <div className="w-full flex items-center justify-center gap-4">
        <button
          className="btn btn-primary btn-md mt-[10px]"
          onClick={() => {
            removeLocalStorage("ievs_otp_token");
            removeLocalStorage("ievs_member_details");
            handleStepChange(1);
          }}
        >
          Back
        </button>
        <button
          className="btn btn-primary btn-md mt-[10px]"
          onClick={(e) => {
            e.preventDefault();

            verifyBtn.current.disabled = false;
            setOtp([...otp.map((v) => "")]);

            const data = { email: email };
            requestOtp(data)
              .then((res) => {
                setError("");
                Toast("OTP sent successfully!", "success");
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
        >
          Resend
        </button>
        <button
          className="btn btn-primary btn-md mt-[10px]"
          onClick={(e) => setOtp([...otp.map((v) => "")])}
        >
          Clear
        </button>
      </div>
      <br />
      <br />
    </form>
  );
};

export default OTPBox;
