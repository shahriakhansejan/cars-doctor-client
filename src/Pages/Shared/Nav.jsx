import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";


const Nav = () => {
  // const {logOut,user} = useContext(AuthContext);
  const { logOut, user } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contract">Contract</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/log-in">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 py-3 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-medium bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold text-lg menu-horizontal px-1">
          {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="border-[#FF3811] font-semibold text-lg rounded border text-[#FF3811] hover:bg-[#FF3811] hover:text-white px-3 py-2">
          Appointment
        </button>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
