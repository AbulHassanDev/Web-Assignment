import React from "react";
import Navbar from "./Navbar";

const PersonalForm = () => {
  return (
    <>
    <Navbar />
    <form className="m-8 border w-auto p-4 shadow-sm">
      <h1 className="font-sans text-center text-3xl leading-loose">
        Personal Information
      </h1>
      <label className="block mb-2" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />

      <label className="block mb-2" htmlFor="password">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />

      <label className="block mb-2">Gender:</label>
      <div className="mb-4">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          className="mr-2"
        />
        <label htmlFor="male" className="mr-4">
          Male
        </label>

        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          className="mr-2"
        />
        <label htmlFor="female">Female</label>
      </div>

      <label className="block mb-2" htmlFor="remarks">
        Remarks:
      </label>
      <input
        type="text"
        id="remarks"
        name="remarks"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <input
        type="submit"
        value="Submit"
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
      />
    </form>
    </>
  );
};

export default PersonalForm;
