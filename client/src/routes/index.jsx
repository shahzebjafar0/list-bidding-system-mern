import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/Signup";
import AddListing from "@/pages/listing/Add";
import UpdateListing from "@/pages/listing/Update";
import ShowBidding from "@/pages/bid/View";
import { Route, Routes } from "react-router-dom";
import Layout from "@/pages/Layout";
import ViewListing from "@/pages/listing/View";
import RegistrationConfirmation from "@/pages/auth/ConfirmRegistration";
import SalesListing from "@/pages/sales/Listings";
import ProtectedRoute from "./protected.route";

function UserRoutes() {
  return (
    <Routes>
      <Route
        path="sign-in"
        element={<SignIn />}
      />
      <Route
        path="sign-up"
        element={<SignUp />}
      />
      <Route
        path="register/:token/confirm"
        element={<RegistrationConfirmation />}
      />
      <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
        <Route
          index
          element={<ProtectedRoute element={<ViewListing />} />}
        />
        <Route
          path="add-listing"
          element={<ProtectedRoute element={<AddListing />} />}
        />
        <Route
          path="view-listing/:listingId"
          element={<ProtectedRoute element={<UpdateListing />} />}
        />
        <Route
          path="list-bid/:listingId"
          element={<ProtectedRoute element={<ShowBidding />} />}
        />
        <Route
          path="sales"
          element={<ProtectedRoute element={<SalesListing />} />}
        />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
