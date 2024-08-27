import React from "react";
import Navbar from "./Navbar";

const BioData = () => {
  return (
    <div className="m-8 border p-4 h-[300px] bg-gray-100">
   <Navbar />

      <h1 className="text-sans text-3xl font-bold leading-loose">Bio Data</h1>
      <img
        src="public\malik.png-removebg-preview.png"
        alt="My Picture"
        className="float-right ml-4 w-32 border rounded-full shadow-lg "
      />
      <p className="text-justify font-sans ">
        Hello! I'm Abulhassan, a recent graduate with a Bachelor's degree from
        Karakoram International University in Gilgit-Baltistan. My academic
        journey has been shaped by a strong commitment to learning and a deep
        appreciation for the unique cultural and natural beauty of my region.
        Throughout my studies, I've developed a solid foundation in Software
        Engineering, equipping me with the skills and knowledge needed to pursue
        my professional aspirations. Whether it's through problem-solving,
        collaboration, or innovation, I'm excited to contribute to projects that
        align with my values and ambitions.
      </p>
    </div>
  );
};

export default BioData;
