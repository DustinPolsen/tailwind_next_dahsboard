import React from "react";
import SideBarComp from "../components/NewSideBarComp";
import BarChartComp from "../components/BarChartComp";
import CompBarChartComp from "../components/CompBarChartComp";

const charts = () => {
  return (
    <div className="p-4 md:ml-64">
      <SideBarComp />
      <div>
        <div className=" text-center text-3xl font-bold text-blue-600 mb-5">
          Charts
        </div>
        {/* <div className=" flex flex-col-1 gap-3">
          <div className=" flex flex-col-1 gap-2">
            <BarChartComp />
            <CompBarChartComp />
          </div>
          <div className=" flex flex-col gap-2">
            <BarChartComp />
            <BarChartComp />
          </div>
        </div> */}
        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}
        {/* <!-- Grid wrapper --> */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* <!-- Columns --> */}
          <div className="bg-red-300">
            <BarChartComp />
          </div>

          <div className="bg-blue-300">
            <CompBarChartComp />
          </div>

          <div className="bg-red-300">
            <BarChartComp />
          </div>

          <div className="bg-blue-300">
            <CompBarChartComp />
          </div>
          <div className="bg-red-300">
            <BarChartComp />
          </div>

          <div className="bg-blue-300">
            <CompBarChartComp />
          </div>
          {/* <!-- Columns --> */}
        </div>
        {/* <!-- Grid wrapper --> */}
      </div>
    </div>
  );
};

export default charts;
