import ReactApexChart from "react-apexcharts";

export function DonutsSatisfaction() {

  const state: any = {
    series: [23,13,3],
    options: {
      chart: {
        type: "pie",
      },
      dataLabels: {
        enabled: true,
      },
      labels: ['Muito Satisfeito', 'Satisfeito','Totalmente Insatisfeito'],
    },
  };

  return (
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
  );
}
