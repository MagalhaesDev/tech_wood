/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from "react-apexcharts";

export function GraphicsCalled() {
  const state: any = {
    series: [
      {
        name: "Setembro",
        data: [
          45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 45, 52, 38, 24, 33, 26, 21, 20,
          6, 8, 45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 10,
        ],
      },
      {
        name: "Outubro",
        data: [
          35, 41, 62, 42, 13, 37, 36, 51, 32, 35, 35, 41, 62, 42, 13, 37, 36,
          51, 32, 35, 35, 41, 62, 42, 13, 37, 36, 51, 32, 35, 11,
        ],
      },
      {
        name: "Novembro",
        data: [
          87, 57, 74, 99, 75, 38, 62, 47, 45, 47, 87, 57, 74, 99, 75, 38, 62,
          47, 45, 47, 87, 57, 74, 99, 75, 38, 62, 47, 45, 47, 13,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: {
        text: "Comparativo de chamados",
        align: "left",
        style: {
          color: "#ffffff",
        },
      },
      legend: {
        tooltipHoverFormatter: function (val: any, opts: any) {
          return (
            val +
            " - " +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ""
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        axisBorder: {
          color: '#ffffff', // Cor do eixo X
        },
        labels: {
          style: {
            colors: '#ffffff', // Cor dos rótulos do eixo X
          },
        },
      },
      yaxis: {
        axisBorder: {
          color: '#ffffff', // Cor do eixo Y
        },
        labels: {
          style: {
            colors: '#ffffff', // Cor dos rótulos do eixo Y
          },
        },
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  };

  return (
    <div id="chart" className="text-zinc-900">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={200}
      />
    </div>
  );
}
