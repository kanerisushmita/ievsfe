import { logoutUser } from "../redux/userSlice";
import { jwtDecode } from "jwt-decode";
import {
  getLocalStorageValue
} from "../utils/helper";
import Toast from "../utils/Toast";

const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp <= currentTime;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    return false;
  }
};

const tokenExpirationMiddleware = (store) => (next) => (action) => {

  if (action.type != "REHYDRATION_COMPLETE") {
    return next(action);
  }
  let accessToken = getLocalStorageValue("accesstoken");
  if (accessToken) {
    if (isTokenExpired(accessToken)) {
      store.dispatch(logoutUser());
      Toast("Your session has expired, try logging in again.");
    }
  }
};
export { tokenExpirationMiddleware };
