import axios from "axios";

axios.interceptors.request.use((requestConfig) => {
  requestConfig.baseURL = `${import.meta.env.VITE_APP_SERVER_URL}/api`;
  requestConfig.headers.authorization = localStorage.getItem("accesstoken");
  requestConfig.headers.testing = "frominterceptor";
  return requestConfig;
});

/**
 * Util function to make an HTTP REST api call.
 * @param {Object} apiconfig - Config parameters for making the rest call.
 * @param {string} apiconfig.url  - endpoint to hit e.g. '\abc'.
 * @param {string} apiconfig.method - Type of Rest Call (get,post,patch etc).
 * @param {string} apiconfig.baseURL - `baseURL` will be prepended to `url`
 * @param {Object} apiconfig.headers - `headers` are custom headers to be sent
 * @param {string} apiconfig.params - `params` are the URL parameters to be sent with the request
 * @param {string} apiconfig.data - `data` is the data to be sent as the request body
 */
//{url, method, baseURL, headers, params, data}
export default async function apiCall(apiconfig) {
  let result = await axios(apiconfig);
  if (result.status === 401) {
    const refreshApiConfig = {
      url: "/api/user/refresh",
      method: "post",
      data: {
        refreshToken: localStorage.getItem("refreshtoken"),
      },
    };
    const refreshResult = await axios(refreshApiConfig);
    if (refreshResult.status === 200) {
      // update local
      localStorage.setItem("accesstoken", refreshResult.data.accessToken);
      localStorage.setItem("refreshtoken", refreshResult.data.refreshToken);
      result = await axios(apiconfig);
    } else {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/login";
    }
  }
  if (result.status >= 400) {
    return {
      success: false,
      data: result.data,
    };
  }
  return {
    success: true,
    data: result.data,
    headers: result.headers,
  };
}
