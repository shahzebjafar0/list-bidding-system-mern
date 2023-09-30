import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [signingOut, setSigningOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    setSigningOut(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      setSigningOut(false);
      navigate('/sign-in');
    }, 2000);
  };

  return (
    <nav className="bg-blue-500 py-4 mb-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link to="/">
            MueshiBay
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <NavItem
            to="/"
            text="Listings"
            isSelected={location.pathname === "/"}
          />
          <NavItem
            to="/add-listing"
            text="Add Listing"
            isSelected={location.pathname === "/add-listing"}
          />
           <NavItem
            to="/sales"
            text="My Sales"
            isSelected={location.pathname === "/sales"}
          />
          <li>
            <button
              onClick={handleSignOut}
              className="text-white hover:text-blue-300 transition duration-300"
            >
              {signingOut ? "Signing out..." : "Sign Out"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, isSelected }) => {
  return (
    <li className="mr-4">
      <Link
        to={to}
        className={`text-white hover:text-blue-300 transition duration-300 ${
          isSelected ? "border-b-2 border-blue-300" : ""
        }`}
      >
        {text}
      </Link>
    </li>
  );
};

export default Nav;
