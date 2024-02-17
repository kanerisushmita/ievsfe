import apiCall from "../utils/apiUtils";

const logout = async (headers, { withCredentials }) => {
  const response = await apiCall({
    url: "/member/logout",
    method: "GET",
    headers,
    withCredentials,
  });
  return response;
};
export { logout };
