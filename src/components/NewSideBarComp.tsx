import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";

const SideBarComp = () => {
  const [isMenueOpen, setMenu] = useState(false);
  return (
    <div className="">
      <section>
        {/* Menu Icons */}
        <RxHamburgerMenu
          onClick={() => setMenu(true)}
          className=" text-3xl cursor-pointer md:hidden"
        />
      </section>

      {/* desktop menu */}
      <div className=" hidden md:block">
        <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-0 ">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="./"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="./charts"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Charts</span>
                </a>
              </li>
              <li>
                <a
                  href="./Customers"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Customer Info</span>
                </a>
              </li>
              <li>
                <a
                  href="./products"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Products</span>
                </a>
              </li>
              <li>
                <a
                  href="./account"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Account</span>
                </a>
              </li>
              <li>
                <a
                  href="./login"
                  className="flex items-center p-2 text-red-900 rounded-lg dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* sidebar mobile menu */}
      <div
        className={clsx(
          "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 left-0 -translate-x-full transition-all",
          isMenueOpen && "translate-x-0"
        )}
      >
        <section className=" text-white bg-slate-900 w-56 flex-cl absolute left-0 top-0 h-screen p-8 gap-8 z-50">
          <IoCloseSharp
            onClick={() => setMenu(false)}
            className=" mt-0 mb-8 text-3xl cursor-pointer"
          />

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="./"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="./charts"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Charts</span>
              </a>
            </li>
            <li>
              <a
                href="./Customers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Customer Info</span>
              </a>
            </li>
            <li>
              <a
                href="./products"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Products</span>
              </a>
            </li>
            <li>
              <a
                href="./account"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Account</span>
              </a>
            </li>
            <li>
              <a
                href="./login"
                className="flex items-center p-2 text-red-900 rounded-lg dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Logout</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SideBarComp;
