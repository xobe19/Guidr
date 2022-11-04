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
  return (
    <main>
      <h1>{props.avgsalary}</h1>
      <Bar options={options} data={data} />
    </main>
  );
}
