import API from "@/utils/AxiosInstance";
import * as APIEndpoints from '@/constants/ApiEndPoints';

export const getListing = async () => {
  try {
    const response = await API.GET(APIEndpoints.LISTING_ENDPOINT);
    console.log(response);
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

export const getSpecificListing = async (id) => {
    try {
      const response = await API.GET(`${APIEndpoints.LISTING_ENDPOINT}/${id}`);
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


export const addListing = async (data) => {
    try {
      const response = await API.POST(APIEndpoints.LISTING_ENDPOINT, data);
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
  export const updateListing = async (data, id) => {
    try {
      const response = await API.PUT(`${APIEndpoints.LISTING_ENDPOINT}/${id}`, data);
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

  export const deleteListing = async (id) => {
    try {
      const response = await API.DELETE(`${APIEndpoints.LISTING_ENDPOINT}/${id}`);
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
