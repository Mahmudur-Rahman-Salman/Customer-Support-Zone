import React from "react";
import logo from "../assets/image/icons8-ticket-64.png";

const Navbar = () => {
  return (
    <>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="navbar">
            {/* Navbar Start */}
            <div className="navbar-start gap-2">
              {/* Mobile Dropdown */}
              <div className="dropdown lg:hidden">
                <label
                  tabIndex={0}
                  className="btn btn-ghost hover:bg-white btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h10"
                    />
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
                >
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                  <li>
                    <a>Changelog</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Download</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <a href="/" className="flex items-center gap-2 ml-2">
                <img src={logo} alt="TicketSys Logo" className="h-8 w-8" />
                <span className="font-bold text-xl text-black">
                  TicketSystem
                </span>
              </a>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-6 font-medium text-black">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
              <button className="btn btn-primary bg-[#7E45EA] btn-sm">
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
