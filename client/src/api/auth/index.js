import API from "@/utils/AxiosInstance";
import * as APIEndpoints from '@/constants/ApiEndPoints';

export const signUp = async (data) => {
  try {
    const {userName,email, password}=data;
    console.log('userName', userName)
    const test={name:userName,email,password}
    console.log("test",test)
    const response = await API.POST(APIEndpoints.SIGNUP_ENDPOINT,test);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Error response from server: ${error.response.status} - ${error.response}`
      );
    } else if (error.request) {
      throw new Error('No response received from the server.');
    } else {
      throw new Error('Error setting up the request: ' + error.message);
    }
  }
};


export const login = async (data) => {

    try {
      const response = await API.POST(APIEndpoints.LOGIN_ENDPOINT, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(
          `Error response from server: ${error.response.status} - ${error.response.data}`
        );
      } else if (error.request) {
        throw new Error('No response received from the server.');
      } else {
        throw new Error('Error setting up the request: ' + error.message);
      }
    }
  };


  export const confirmRegistration = async (data) => {
    try {
      const response = await API.POST(APIEndpoints.CONFRIM_REGISTRATION_ENDPOINT, data);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(
          `Error response from server: ${error.response.status} - ${error.response.data}`
        );
      } else if (error.request) {
        throw new Error('No response received from the server.');
      } else {
        throw new Error('Error setting up the request: ' + error.message);
      }
    }
  };
