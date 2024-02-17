import React, { useRef, useState } from "react";

import Toast from "../../../utils/Toast";
import Captcha from "react-numeric-captcha";
import { loginMember } from "../../../apis/member";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../../../utils/helper";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginBtn = useRef(null);

  const [captchaSuccess, setCaptcha] = useState(false);
  const captchaRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let data = { email: email, password: password };
    if (!captchaSuccess) {
      setCaptcha(false);
      alert("Wrong captcha! Try again. ");
      captchaRef.current.refresh();
      return;
    }
    loginBtn.current.disabled = true;
    try {
      let res = await loginMember(data, { withCredentials: true });
      if (res.success) {
        loginBtn.current.disabled = false;
        if (res.data.isAuth == false) {
          await captchaRef.current.refresh();
          setCaptcha(false);
          alert("Wrong credentials");
          return;
        }
        if (res.data.isAuth == true) {
          // User should be allowed to login
          Toast(res.data.message, "success");
          setLocalStorage("accesstoken", res.headers.accesstoken);
          dispatch(
            loginUser({
              accesstoken: res.headers.accesstoken,
              refreshtoken: res.headers.refreshtoken,
              data: res.data?.data,
              authenticated: res.data.isAuth,
            })
          );
          return navigate("/");
        }
        captchaRef.current.refresh();
        setCaptcha(false);
        Toast("Invalid Credential found", "error");
        loginBtn.current.disabled = false;
        return;
      } else {
        captchaRef.current.refresh();
        setCaptcha(false);
        Toast("Invalid Credential found", "error");
        loginBtn.current.disabled = false;
        return;
      }
    } catch (e) {
      console.log(captchaRef);
      captchaRef.current.refresh();
      setCaptcha(false);
      console.log("Exception", e);
      if (e.message) {
        Toast(e.message, "error");
      } else {
        Toast("Invalid Credential found", "error");
      }
      loginBtn.current.disabled = false;
    }
  }

  return (
    <div className="bg-white custom-shadow-lg p-8 rounded-md lg:w-1/2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-4">
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
              type="password"
              className=" from-control"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <Captcha
            ref={captchaRef}
            onChange={(status) => {
              setCaptcha(status);
            }}
          />
        </div>
        <div className="flex justify-between gap-5">
          <button className="lg:w-1/2" disabled></button>
          <div className="lg:w-1/2 flex gap-3">
            <button
              onClick={() => navigate("/membership")}
              className="lg:w-1/2 btn btn-black btn-sm mt-[10px]"
            >
              Register
            </button>
            <button
              type="submit"
              ref={loginBtn}
              className="lg:w-1/2 btn btn-primary btn-sm mt-[10px]"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
