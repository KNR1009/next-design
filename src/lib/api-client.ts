import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
const headers = {
  "Content-Type": "application/json",
};

export const ApiClient = axios.create({ baseURL, headers });

// セッションからブリッジIDを取得
const getBridgeId = () => {
  return sessionStorage.getItem("bridgeId");
};

// セッションからtokenを取得
const getToken = () => {
  return sessionStorage.getItem("token");
};

ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    switch (error?.response?.status) {
      case 401:
        break;
      case 404:
        break;
      default:
        console.log("== internal server error");
    }

    const errorMessage = (error.response?.data?.message || "").split(",");
    throw new Error(errorMessage);
    // return { errors: errorMessage, message: "error message" };
  }
);

ApiClient.interceptors.request.use(async (request: any) => {
  const bridgeId = getBridgeId();
  const token = getToken();
  if (request && request.url?.includes("posts")) {
    request.headers["access-token"] = token;
    request.headers.Authorization = `Token bridgeId:${bridgeId}`;
  }
  return request;
});
