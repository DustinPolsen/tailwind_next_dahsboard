import React from "react";
import SideBarComp from "../components/NewSideBarComp";

const account = () => {
  return (
    <div className="p-4 md:ml-64">
      <SideBarComp />
      <div className=" flex flex-col items-center mt-24 gap-5">
        {/* Image */}
        <img
          className=" h-64 w-64 md:h-96 md:w-96"
          src="/AdminPfp.png"
          alt="Progile pic"
        />
        {/* User ID */}
        <h4 className=" text-3xl md:text-4xl">User Name</h4>
        {/* Email */}
        <h4 className=" text-xl md:text-2xl text-gray-700">
          admin@dashboard.com
        </h4>
        {/* Password change button */}
        <a
          href="./resetPass"
          className="text-red-700 md:w-64 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Change password
        </a>
      </div>
    </div>
  );
};

export default account;
