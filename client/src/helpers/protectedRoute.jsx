
import { Route, Navigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from './getToken';

// Custom PrivateRoute component to protect routes
const PrivateRoute = ({ element, ...rest }) => {
  const token = getTokenFromLocalStorage();

  // If token exists, render the protected route, otherwise, navigate to the sign-in page
  return token ? <Route {...rest} element={element} /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
