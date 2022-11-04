import React from "react";
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

export default function BarGraph(props) {
  const labels = [];
  let count = 0;
  const numArray = [];
  for (const property in props.statesMap) {
    labels.push(property);
    const num = props.statesMap[property];
    numArray.push(num);
    count++;
    if (count == 5) {
      break;
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "State vs Available jobs",
        data: numArray,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  let rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <>
      <h1 className="text-5xl font-extrabold dark:text-black">
        Average Salary of :{" "}
        <span class="text-blue-600 dark:text-blue-500">
          {rupeeIndian.format(Math.trunc(props.avgsalary))} Lakhs
        </span>
      </h1>

      <Bar
        // width={500}
        // height={500}
        // className="ml-100"
        options={options}
        data={data}
      />
    </>
  );
}