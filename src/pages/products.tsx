import React, { useState } from "react";
import SideBarComp from "../components/NewSideBarComp";
import ProductModalComp from "../components/ProductModalComp";

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
          <h4 className=" text-3xl">Products List:</h4>{" "}
          <button
            onClick={toggleModal}
            className="text-blue-700 md:w-64 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add New Entry
          </button>
        </div>
        {/* modal */}
        <div>{modal && <ProductModalComp />}</div>

        <div className="flex flex-col items-center justify-center mb-4 rounded bg-gray-50 border-2 border-gray-200">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Catagory
                </th>
                <th scope="col" className="px-6 py-3">
                  Store
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Buying Price
                </th>
                <th scope="col" className="px-6 py-3">
                  MRP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pran Potato
                </th>
                <td className="px-6 py-4">Food</td>
                <td className="px-6 py-4">Hulu General Store</td>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">৳ 10</td>
                <td className="px-6 py-4">৳ 20</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pran Potato
                </th>
                <td className="px-6 py-4">Food</td>
                <td className="px-6 py-4">Hulu General Store</td>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">৳ 10</td>
                <td className="px-6 py-4">৳ 20</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pran Potato
                </th>
                <td className="px-6 py-4">Food</td>
                <td className="px-6 py-4">Hulu General Store</td>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">৳ 10</td>
                <td className="px-6 py-4">৳ 20</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pran Potato
                </th>
                <td className="px-6 py-4">Food</td>
                <td className="px-6 py-4">Hulu General Store</td>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">৳ 10</td>
                <td className="px-6 py-4">৳ 20</td>
              </tr>
              <tr className="bg-white border-b-800-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Pran Potato
                </th>
                <td className="px-6 py-4">Food</td>
                <td className="px-6 py-4">Hulu General Store</td>
                <td className="px-6 py-4">75</td>
                <td className="px-6 py-4">৳ 10</td>
                <td className="px-6 py-4">৳ 20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
