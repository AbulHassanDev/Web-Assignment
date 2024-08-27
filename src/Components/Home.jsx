import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl p-10 font-bold">Welcome to MyPage</h1>
    </>
  );
};

export default Home;
