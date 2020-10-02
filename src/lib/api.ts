import axios from "axios";

const baseUrl = "https://express-server-sander.herokuapp.com";

const config = {
  headers: {
    "Content-type": "application/json"
  }
};

// Register user
export const registerUser = async (userData: Object) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/user/register`,
      userData,
      config
    );
    return response;
  } catch (error) {
    console.error(`Register request failed: ${error}`);
  }
};

//Login user
export const loginUser = async (userData: Object) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/user/login`,
      userData,
      config
    );
    return response;
  } catch (error) {
    console.error(`Login request failed: ${error}`);
  }
};
