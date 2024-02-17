import React, { useEffect, useRef, useState } from "react";
import useRazorpay from "react-razorpay";

import { registerMember } from "../../../apis/member";
import Toast from "../../../utils/Toast";
import {
  getLocalStorageValue,
  removeLocalStorage,
} from "../../../utils/helper";
import { useNavigate } from "react-router-dom";
import crypto from "crypto";
import { IoEye, IoEyeOff } from "react-icons/io5";
import member_types from "../member_types";

function Register_3({ handleStepChange }) {
  const finishBtn = useRef(null);
  const payBtn = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [Razorpay] = useRazorpay();

  const { email, memberType, phoneNumber } = getLocalStorageValue(
    "ievs_member_details"
  )
    ? JSON.parse(getLocalStorageValue("ievs_member_details"))
    : { email: "", memberType: "", phoneNumber: "" };
    const [showPassword, setShowPassword] = useState(false);
    
    const [fullName, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [charges, setCharges] = useState({ fee: "", currency: "" });

  useEffect(() => {
    if (memberType) {
      let type = member_types?.filter(
        (type) => type.short_name === memberType
      )[0];
      setCharges({ fee: type?.fee, currency: type?.currency });
    }
  }, [memberType]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password) {
      return Toast("Password is required!", "error");
    }
    if (password !== confirmPassword) {
      return Toast("Passwords do not match, please re-check", "error");
    }

    finishBtn.current.disabled = true;
    const data = {
      fullName,
      email,
      phoneNumber,
      password,
      memberType,
      designation,
      affiliation,
    };
    registerMember(data)
      .then((res) => {
        finishBtn.current.disabled = false;
        if (res.data.success) {
          // clear localStorage
          removeLocalStorage("ievs_member_details");
          removeLocalStorage("ievs_otp_token_verified");
          Toast("Member registered successfully, login now", "success");
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.data.message === "jwt expired") {
          Toast("Session expired, please start again", "error");
          removeLocalStorage("ievs_otp_token_verified");
          removeLocalStorage("ievs_member_details");
          handleStepChange(1);
        } else {
          Toast(error.response.data.message, "error");
        }
        finishBtn.current.disabled = false;
      });
  };

  const generateSignature = (paymentId) => {
    const signatureData = paymentId;
    const hmac = crypto.createHmac(
      "sha256",
      import.meta.env.VITE_APP_RAZORPAY_WEBHOOK_SECRET
    );
    hmac.update(signatureData);
    return hmac.digest("hex");
  };

  const handlePayment = async () => {
    const options = {
      key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID,
      amount: Number(charges?.fee + "00"),
      currency: charges?.currency,
      name: "IEVS",
      description: "Test Transaction - Membership fee",
      image: "https://exosome-rna.com/wp-content/uploads/2023/12/ievs.jpg",
      // order_id: Math.floor(Date.now() / 1000),
      handler: function (response) {
        let paymentId = response?.razorpay_payment_id;
        let signature = generateSignature(paymentId);
        const data = {
          fullName,
          email,
          phoneNumber,
          memberType,
          password,
          designation,
          affiliation,
          paymentId,
          signature,
        };
        registerMember(data)
          .then((res) => {
            payBtn.current.disabled = false;
            if (res.data.success) {
              // clear localStorage
              removeLocalStorage("ievs_member_details");
              removeLocalStorage("ievs_otp_token_verified");
              Toast("Member registered successfully, login now", "success");
              navigate("/login");
            }
          })
          .catch((error) => {
            if (error.response.data.message === "jwt expired") {
              Toast("Session expired, please start again", "error");
              removeLocalStorage("ievs_otp_token_verified");
              removeLocalStorage("ievs_member_details");
              handleStepChange(1);
            } else {
              Toast(error.response.data.message, "error");
            }
            payBtn.current.disabled = false;
          });
      },
      prefill: {
        name: "John Doe",
        email: "igaimerca@gmail.com",
        contact: "250793082404",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "rgb(255, 126, 132)",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      Toast(response.error.code.description);
      console.log(response.error);
    });

    rzp1.open();
  };
  const handlePayMembershipFee = async (e) => {
    e.preventDefault();

    if (!password) {
      return Toast("Password is required!", "error");
    }
    if (password !== confirmPassword) {
      return Toast("Passwords do not match, please re-check", "error");
    }

    let confirmation = confirm(
      "You're going to pay " + charges?.fee + " " + charges?.currency
    );
    if (confirmation) {
      handlePayment();
    } else {
      alert("Payment cancelled!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
      <div className="w-full">
        <input
          type="text"
          className=" from-control"
          placeholder="Full Name"
          value={fullName}
          required
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="flex justify-between gap-5">
        <div className="lg:w-1/2">
          <input
            type="text"
            className=" from-control"
            placeholder="Designation"
            value={designation}
            required
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="lg:w-1/2">
          <input
            type="text"
            className=" from-control"
            placeholder="Affiliation"
            value={affiliation}
            required
            onChange={(e) => setAffiliation(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="lg:w-1/2 relative">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            className=" from-control"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="p-3">
            {showPassword ? (
              <IoEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute top-[25%] right-2"
              />
            ) : (
              <IoEye
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute top-[25%] right-2"
              />
            )}
          </div>
        </div>
        <div className="lg:w-1/2">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            className=" from-control"
            placeholder="Re-enter password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <button
          className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
          onClick={() => {
            removeLocalStorage("ievs_otp_token_verified");
            removeLocalStorage("ievs_member_details");
            handleStepChange(1);
          }}
        >
          Back
        </button>
        <button
          type="submit"
          ref={finishBtn}
          className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
        >
          Finish
        </button>
        <button
          ref={payBtn}
          onClick={handlePayMembershipFee}
          className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
        >
          Pay & Finish
        </button>
      </div>
    </form>
  );
}

export default Register_3;
