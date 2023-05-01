import BarChartComp from "../components/BarChartComp";
import CompBarChartComp from "../components/CompBarChartComp";
import SideBarComp from "../components/NewSideBarComp";

export default function Home() {
  return (
    <div className="">
      <div className="p-4 md:ml-64">
        <SideBarComp />
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col justify-around h-32 bg-gray-50 border-2 rounded-lg border-gray-200 p-4">
              <h4 className=" text-l md:text-xl lg:text-2xl">
                Total Customers
              </h4>
              <h3 className=" text-xl md:text-2xl lg:text-3xl text-center text-blue-600 font-bold">
                102
              </h3>
              <p className=" text-sm md:text-l text-gray-500 text-right">
                New Customers(30 days): <span>12</span>
              </p>
            </div>
            <div className="flex flex-col justify-around h-32 bg-gray-50 border-2 rounded-lg border-gray-200 p-4">
              <h4 className=" text-l md:text-xl lg:text-2xl">
                Monthly Profits
              </h4>
              <h3 className=" text-xl md:text-2xl lg:text-3xl text-center text-green-600 font-bold">
                ৳ 1,44,000
              </h3>
              <p className=" text-sm md:text-l text-gray-500  text-right">
                Janyary, 2024
              </p>
            </div>
            <div className="flex flex-col justify-around h-32 bg-gray-50 border-2 rounded-lg border-gray-200 p-4">
              <h4 className=" text-l md:text-xl lg:text-2xl">Total Due</h4>
              <h3 className=" text-xl md:text-2xl lg:text-3xl text-center text-red-500 font-bold pb-4">
                ৳ 32,000
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className=" rounded bg-gray-50 h-80 border-2 border-gray-200">
              <BarChartComp />
            </div>
            <div className="rounded bg-gray-50 h-80 border-2 border-gray-200">
              <CompBarChartComp />
            </div>
          </div>
          <h4 className=" text-2xl">Current Customer Dues</h4>
          <div className=" mb-4 rounded bg-gray-50 border-2 border-gray-200">
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
    </div>
  );
}
