/* eslint-disable @typescript-eslint/no-explicit-any */

import ReactApexChart from "react-apexcharts";

export function DonutsSatisfaction() {

  const state: any = {
    series: [23,13,3],
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false
      },
      labels: ['Muito Satisfeito', 'Satisfeito','Totalmente Insatisfeito'],
      colors: ['#22c55e', '#FFC107', '#FF5722'],
    },
  };

  return (
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          height={125}
          type="donut"
        />
      </div>
  );
}
