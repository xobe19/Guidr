import React from "react";
import info from "./../components/info";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = [];
for (const property in info.statesMap) {
  labels.push(property);
}
labels.sort();

export const data = {
  labels,
  datasets: [
    {
      label: "City Maps vs Job Available",
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [10, 20, 30, 40, 50],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
