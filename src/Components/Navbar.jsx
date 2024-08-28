import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <Link className="text-white no-underline hover:underline" to="/bio">
                Bio-data
              </Link>
            </li>
            <li>
              <Link className="text-white no-underline hover:underline" to="/table">
                Course Table
              </Link>
            </li>
            <li>
              <Link className="text-white no-underline hover:underline" to="/form">
                Personal Information Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
