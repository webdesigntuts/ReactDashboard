import ReactApexChart from "react-apexcharts";

const StackedColumns = () => {
  const charData = {
    series: [
      {
        name: "Dec",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Jan",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "Feb",
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: "Mar",
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: ["#4338ca", "#6366f1", "#a5b4fc", "#e0e7ff"],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 15,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "02/02/2011 GMT",
          "03/03/2011 GMT",
          "04/04/2011 GMT",
          "05/05/2011 GMT",
          "06/06/2011 GMT",
        ],
      },
      legend: {
        position: "top",
        offsetY: 15,
      },
    },
  };

  return (
    <ReactApexChart
      options={charData.options}
      series={charData.series}
      height="100%"
      type="bar"
    />
  );
};

export default StackedColumns;
