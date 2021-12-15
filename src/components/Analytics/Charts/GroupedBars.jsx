import ReactApexChart from "react-apexcharts";

const GroupedBars = () => {
  const charData = {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#6366f1", "#38bef8"],
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        show: false,
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        position: "top",
        offsetY: 15,
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <ReactApexChart
      options={charData.options}
      series={charData.series}
      height="100%"
      type="bar"
      width="100%"
    />
  );
};

export default GroupedBars;
