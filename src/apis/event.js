import apiCall from "../utils/apiUtils";
import { getLocalStorageValue } from "../utils/helper";

const createEvent = async (data) => {
  let accesstoken = getLocalStorageValue("accesstoken");
  let axiosHeaders = {
    headers: {
      accesstoken,
    },
  };
  const response = await apiCall({
    url: "/event",
    method: "POST",
    data: data,
    headers: axiosHeaders,
  });
  return response;
};


const subscribeEvent = async (data) => {
  const response = await apiCall({
    url: "/event/subscribe",
    method: "POST",
    data: data,
  });
  return response;
};

const getEventsByEventType = async (eventType) => {
  const response = await apiCall({
    url: `/event/type`,
    method: "POST",
    data: { eventType }
  });
  return response;
};

const getAllEvents = async () => {
  const response = await apiCall({
    url: `event/`,
    method: "GET",
  });
  return response;
};

export {
  createEvent,
  getAllEvents,
  getEventsByEventType,
  subscribeEvent
};
