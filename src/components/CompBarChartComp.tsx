import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CompBarChartComp = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "৳ debit",
          data: [
            144500, 134500, 95500, 154500, 201500, 140500, 124500, 147700,
            124500, 84500, 114500, 154500,
          ],
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "৳ credit",
          data: [
            144200, 114500, 65500, 124500, 101500, 150500, 144500, 147700,
            114500, 64500, 104500, 153500,
          ],
          backgroundColor: "rgb(255, 162, 235)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        Legend: {
          positon: "top",
        },
        title: {
          display: true,
          text: "2023 Debit and Credit",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className=" w-full h-full m-auto p-4 border rounded-lg bg-white flex justify-center">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default CompBarChartComp;
