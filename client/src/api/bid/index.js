import API from "@/utils/AxiosInstance";
import * as APIEndpoints from '@/constants/ApiEndPoints';

export const getBid = async (listingId) => {
  try {
    const response = await API.GET(`${APIEndpoints.BID_ENDPOINT}/${listingId}`);
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


export const placeBid = async (data) => {
    try {
      const response = await API.POST(APIEndpoints.BID_ENDPOINT, data);
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
  export const acceptBid = async (data,id) => {
    try {
      const response = await API.PATCH(`${APIEndpoints.BID_ENDPOINT}/${id}`, data);
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

