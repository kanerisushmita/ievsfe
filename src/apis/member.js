import apiCall from "../utils/apiUtils";
import {
  getLocalStorageValue,
  removeLocalStorage,
  setLocalStorage,
} from "../utils/helper";

const registerMember = async (data) => {
  let ievs_otp_token_verified = getLocalStorageValue("ievs_otp_token_verified");
  let axiosHeaders = {
    headers: {
      ievs_otp_token_verified,
    },
  };
  const response = await apiCall({
    url: "/member/register",
    method: "POST",
    data: data,
    headers: axiosHeaders.headers,
  });
  return response;
};

const updateMember = async (memberId, data) => {
  const response = await apiCall({
    url: `/member/${memberId}`,
    method: "PUT",
    data: data,
  });
  return response;
};

const generateIDCard = async (data) => {
  const response = await apiCall({
    url: `/member/generate-member-id-card`,
    method: "POST",
    data: data,
  });
  return response;
};

const getMemberByMemberID = async (memberID) => {
  const response = await apiCall({
    url: `member/${memberID}`,
    method: "GET",
  });
  return response;
};

const getMemberById = async (id) => {
  const response = await apiCall({
    url: `member/getById/${id}`,
    method: "GET",
  });
  return response;
};

const getAllMembers = async () => {
  const response = await apiCall({
    url: `member/`,
    method: "GET",
  });
  return response;
};

const loginMember = async (data, { withCredentials }) => {
  const response = await apiCall({
    url: "/member/login",
    method: "POST",
    data: data,
    withCredentials,
  });
  return response;
};

const authenticateMember = async (axiosHeaders, { withCredentials }) => {
  const response = await apiCall({
    url: "/member/authenticate",
    method: "GET",
    headers: axiosHeaders,
    withCredentials,
  });
  return response;
};


const requestOtp = async (data) => {
  const response = await apiCall({
    url: "/member/otp/request",
    method: "POST",
    data: data,
  });
  if (response.success) {
    if (Boolean(response.headers.ievs_otp_token)) {
      setLocalStorage("ievs_otp_token", response.headers.ievs_otp_token);
    }
  }
  return response;
};

const verifyOtp = async (data) => {
  let ievs_otp_token = getLocalStorageValue("ievs_otp_token");
  const axiosHeaders = {
    headers: {
      ievs_otp_token: ievs_otp_token,
    },
  };
  const response = await apiCall({
    url: "/member/otp/verify",
    method: "POST",
    data: data,
    headers: axiosHeaders.headers,
  });
  if (response.success) {
    if (Boolean(response.headers.ievs_otp_token_verified)) {
      setLocalStorage(
        "ievs_otp_token_verified",
        response.headers.ievs_otp_token_verified
      );
      removeLocalStorage("ievs_otp_token");
    }
  }

  return response;
};

export {
  registerMember,
  updateMember,
  getMemberByMemberID,
  getMemberById,
  loginMember,
  authenticateMember,
  generateIDCard,
  requestOtp,
  verifyOtp,
  getAllMembers,
};
