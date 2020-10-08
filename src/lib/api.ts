import axios from "axios";

//Routes
const API_URL = "https://express-server-sander.herokuapp.com/api";
const REGISTER_PATH = "/user/register";
const LOGIN_PATH = "/user/login";

// Register user
export const registerUser = async (userData: Object): Promise<any> => {
  try {
    const response = await axios.post(`${API_URL}${REGISTER_PATH}`, userData);
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
    const response = await axios.post(`${API_URL}${LOGIN_PATH}`, userData);
    callback(response);
  } catch (error) {
    errorCallback(error);
  }
};
