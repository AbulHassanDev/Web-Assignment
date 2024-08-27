import React from "react";
import Navbar from "./Navbar";

const CourseTable = () => {
  return (
    <>
      <Navbar />
      <h1 className="font-sans text-3xl ml-8 mt-6 font-bold">Course Table</h1>
      <table className="table-auto w-1/2 m-8 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Program</th>
            <th className="border border-gray-300 p-2">Credits</th>
            <th className="border border-gray-300 p-2">Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Malik</td>
            <td className="border border-gray-300 p-2">Bachelor of Science</td>
            <td className="border border-gray-300 p-2">120</td>
            <td className="border border-gray-300 p-2">Dr. Ismail</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">AbulHassan</td>
            <td className="border border-gray-300 p-2">Master of Arts</td>
            <td className="border border-gray-300 p-2">30</td>
            <td className="border border-gray-300 p-2">Prof. Sabit Raheem</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Ali</td>
            <td className="border border-gray-300 p-2">
              Bachelor of Engineering
            </td>
            <td className="border border-gray-300 p-2">150</td>
            <td className="border border-gray-300 p-2">Dr. Guljabeen</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseTable;
