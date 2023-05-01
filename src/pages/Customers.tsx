import React, { useState } from "react";
import SideBarComp from "../components/NewSideBarComp";
import CustomerModalComp from "../components/CustomerModalComp";

const Customers = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="p-4 md:ml-64">
      <SideBarComp />
      <div>
        <div className=" flex justify-between">
          <h4 className=" text-3xl">Customers List:</h4>{" "}
          <button
            onClick={toggleModal}
            className="text-blue-700 md:w-64 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add New Entry
          </button>
        </div>
        {/* modal */}
        <div>{modal && <CustomerModalComp />}</div>

        <div className="flex flex-col items-center justify-center mb-4 rounded bg-gray-50 border-2 border-gray-200">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Due
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Islam MD S
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">02 February, 2024</td>
                <td className="px-6 py-4">৳ 10,000</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Khodejs Begum
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">01 February, 2024</td>
                <td className="px-6 py-4">৳ 10,000</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Mateo Evelyn J
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">03 February, 2024</td>
                <td className="px-6 py-4">৳ 8,000</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Blake Down
                </th>
                <td className="px-6 py-4">Product #</td>
                <td className="px-6 py-4">03 February, 2024</td>
                <td className="px-6 py-4">৳ 4,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
