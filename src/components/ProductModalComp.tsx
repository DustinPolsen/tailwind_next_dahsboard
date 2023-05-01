import React from "react";

const CustomerModalComp = () => {
  return (
    <div className=" border my-7 flex flex-col text-center py-4">
      <h4 className=" mt-3 text-center font-bold text-xl">Add Product:</h4>
      <form className=" ">
        <div className="m-3">
          <input
            type="text"
            placeholder="Product Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          />
        </div>
        <div className="mx-3 flex flex-row">
          <select
            id="catagory"
            className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          >
            <option selected>Choose a catagory</option>
            <option value="1">Catagory 1</option>
            <option value="2">Catagory 2</option>
            <option value="3">Catagory 3</option>
            <option value="3">Catagory 4</option>
          </select>
          <label
            id="file-input-label"
            htmlFor="product_img_input"
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          >
            Input Product Image
          </label>
          <input
            type="file"
            id="product_img_input"
            accept="image/png, image/jpeg"
            title="Add Product Image"
            className=" hidden "
          />
        </div>
        <div className="m-3 flex flex-row">
          <input
            type="text"
            placeholder="Quantity"
            className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          />
          <input
            type="text"
            placeholder="Store"
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
          />
        </div>
        <div className="m-3 flex flex-row">
          <input
            type="text"
            placeholder="Buying Price"
            className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <input
            type="text"
            placeholder="Maximum retail price (MRP)"
            className=" ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CustomerModalComp;
