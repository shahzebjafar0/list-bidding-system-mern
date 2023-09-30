export const getTokenFromLocalStorage= () => {
  try {
    const token = localStorage.getItem('token');

    if (token !== null) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token from localStorage:', error);
    return null;
  }
}

