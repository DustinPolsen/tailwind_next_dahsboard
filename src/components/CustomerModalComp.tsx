import React from "react";

const CustomerModalComp = () => {
  return (
    <div className=" border my-7 flex flex-col text-center py-4">
      <h4 className=" mt-3 text-center font-bold text-xl">Add customer:</h4>
      <form className=" ">
        <div className="m-3">
          <input
            type="text"
            placeholder="Customer Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            placeholder="Product ID"
            className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="text"
            placeholder="Product Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            placeholder="Paid bill"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default CustomerModalComp;
