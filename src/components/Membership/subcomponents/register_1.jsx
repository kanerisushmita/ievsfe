import React, { useRef, useState } from "react";

import { requestOtp } from "../../../apis/member";
import Toast from "../../../utils/Toast";
import { setLocalStorage } from "../../../utils/helper";
import { useNavigate, useSearchParams } from "react-router-dom";
import member_types from "../member_types";

function Register_1({ handleStepChange }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let type = searchParams.get("type");
  const nextBtn = useRef(null);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [memberType, setMemberType] = useState(type);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      Toast("Please enter your email to continue", "error");
    } else {
      const email_reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
      if (!email_reg.test(email)) {
        Toast("Please enter a valid Email", "error");
      } else if (!phoneNumber || phoneNumber?.length < 7) {
        Toast("Your phone number must be atleast of 7 digits", "error");
      } else {
        nextBtn.current.disabled = true;
        const data = { email: email };
        requestOtp(data)
          .then((res) => {
            nextBtn.current.disabled = false;
            if (res.data.memberExists) {
              nextBtn.current.disabled = false;
              Toast(res.data.result);
              return res.data.result;
            } else {
              // Updated localStorage
              setLocalStorage(
                "ievs_member_details",
                JSON.stringify({
                  email,
                  phoneNumber,
                  memberType,
                })
              );
              handleStepChange(2);
            }
          })
          .catch((error) => {
            console.log(error);
            Toast(error.response.data.result, "error");
            nextBtn.current.disabled = false;
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
      <div className="w-full">
        <select
          className="from-control"
          required
          onChange={(e) => setMemberType(e.target.value)}
          value={memberType}
        >
          <option value="" disabled selected={!memberType}>
            Select Member Type*
          </option>
          {member_types?.map((type, index) => (
            <option
              selected={memberType === type?.short_name}
              value={type?.short_name}
              key={index}
            >
              {type?.name} {type?.currency}
              {type?.fee} ({type?.year_range})
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between gap-5">
        <div className="lg:w-1/2">
          <input
            type="email"
            className=" from-control"
            placeholder="Email*"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
        </div>
        <div className="lg:w-1/2">
          <input
            type="tel"
            className=" from-control"
            placeholder="Phone Number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="self-end flex text-left px-3 text-sm lg:w-1/2">
        <span className="w-full">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-primary">
            Login
          </button>
        </span>
      </div>
      <div className="flex justify-between gap-5">
        <button className="lg:w-1/2" disabled></button>
        <button
          type="submit"
          ref={nextBtn}
          className="lg:w-1/2 btn btn-primary btn-md mt-[10px]"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Register_1;
