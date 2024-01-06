/* eslint-disable @typescript-eslint/no-explicit-any */

import ReactApexChart from "react-apexcharts";

export function MajorProblemsGraphics() {

  const state: any = {
    series: [233,123,43],
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
      colors: ['#f4d410', '#aca2a2', '#g21d2d'],
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
