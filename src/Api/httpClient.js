/* eslint-disable no-console */
import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 30000, // indicates, 1000ms ie. 1 second
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// interceptor to catch errors
const errorInterceptor = (error) => {
  console.log(error);
  // all the error responses
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message);
      //notify.warn("Nothing to display", "Data Not Found");
      break;

    default:
      console.error(error.response.status, error.message);
    //notify.error("Server Error");
  }
  return Promise.reject(error);
};

// Interceptor for responses
const responseInterceptor = (response) => {
  switch (response.status) {
    case 200:
      // yay!
      break;
    // any other cases
    default:
    // default case
  }

  return response;
};
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);
