import { useState, useEffect } from "react";
import Register_1 from "../subcomponents/register_1";
import { getLocalStorageValue } from "../../../utils/helper";
import OTPBox from "../subcomponents/register_otp";
import Register_3 from "../subcomponents/register_3";

function MembershipForm(props) {
  const [step, setStep] = useState(1);
  

  useEffect(() => {
    if (getLocalStorageValue("ievs_otp_token")) {
      setStep(2); // verify
    } else if (getLocalStorageValue("ievs_otp_token_verified")) {
      setStep(3); // complete
    }
  }, [
    getLocalStorageValue("ievs_otp_token"),
    getLocalStorageValue("ievs_otp_token_verified"),
  ]);

  return (
    <div className="bg-white custom-shadow-lg p-8 rounded-md lg:w-1/2">
      <div className="text-center">
        <span className="progress_dot_done"></span>
        <span
          className={step > 1 ? "progress_dot_done" : "progress_dot"}
        ></span>
        <span
          className={step > 2 ? "progress_dot_done" : "progress_dot"}
        ></span>
      </div>
      {step == 1 ? (
        <>
          <Register_1
            handleStepChange={(val) => setStep(val)}
          />
        </>
      ) : step == 2 ? (
        <>
          {" "}
          <OTPBox handleStepChange={(val) => setStep(val)} />
        </>
      ) : step == 3 ? (
        <>
          <Register_3
            handleStepChange={(val) => setStep(val)}
          />
        </>
      ) : null}
    </div>
  );
}

export default MembershipForm;
