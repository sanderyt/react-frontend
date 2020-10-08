import axios, { AxiosResponse } from "axios";

const baseUrl = "https://express-server-sander.herokuapp.com/api";

const config = {
  headers: {
    "Content-type": "application/json"
  }
};

// Register user
export const registerUser = async (userData: Object): Promise<any> => {
  try {
    const response = await axios.post(
      `${baseUrl}/user/register`,
      userData,
      config
    );
    return response;
  } catch (error) {
    console.error(`Register request failed: ${error.response.data}`);
  }
};

//Login user
export const loginUser = async (
  userData: Object,
  callback: Function,
  errorCallback: Function
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/user/login`,
      userData,
      config
    );
    callback(response);
  } catch (error) {
    errorCallback(error);
  }
};
