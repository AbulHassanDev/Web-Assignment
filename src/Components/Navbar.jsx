import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 static">
      <ul className="flex space-x-8">
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
    </nav>
  );
};

export default Navbar;
