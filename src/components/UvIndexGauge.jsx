import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const UVIndexGauge = ({ uvIndex }) => {
  const data = {
    datasets: [
      {
        data: [uvIndex, 12 - uvIndex],
        backgroundColor: ["#FFB74D", "#E0E0E0"],
        borderWidth: 0,
        cutout: "75%",
        rotation: 270,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
    },
    cutout: "70%",
    rotation: 270,
    circumference: 180,
    elements: {
      center: {
        text: `${uvIndex}`,
        color: "#000000",
        fontStyle: "Arial",
        sidePadding: 20,
        minFontSize: 20,
        lineHeight: 25,
      },
    },
  };

  return (
    <div className="relative h-48 w-48 rounded-xl bg-white p-2">
      <h2 className="text-neutral-400">UV Index</h2>
      <Doughnut data={data} options={options} />
      <div className="absolute left-1/2 top-3/4 translate-x-[-50%] translate-y-[-50%]">
        <div className="text-3xl font-light">{uvIndex}</div>
      </div>
    </div>
  );
};

export default UVIndexGauge;
