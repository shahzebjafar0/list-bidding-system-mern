import API from "@/utils/AxiosInstance";
import * as APIEndpoints from '@/constants/ApiEndPoints';

export const getSales = async () => {
  try {
    const response = await API.GET(APIEndpoints.SALES_ENDPOINT);
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
