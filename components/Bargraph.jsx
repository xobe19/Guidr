import React from "react";
import { Bar } from "react-chartjs-2";
import info from "./../components/info";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data } from "./Chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [];
let count = 0;
const numArray = [];
for (const property in info.statesMap) {
  labels.push(property);
  const num = info.statesMap[property];
  numArray.push(num);
  count++;
  if (count == 5) {
    break;
  }
}

console.log(labels);
console.log(numArray);
export default function BarGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "State vs Available jobs",
        data: numArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
