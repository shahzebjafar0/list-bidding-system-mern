import axios from 'axios';
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL

export const uploadImage = async (data) => {
    try {
        const response = await axios.post(`${CLOUDINARY_URL}/image/upload`, data);
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
