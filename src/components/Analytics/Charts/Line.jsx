import ReactApexChart from "react-apexcharts";
import styles from "./Line.module.scss";

const Line = ({ showData, background }) => {
  const chartData = {
    series: [
      {
        name: "",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
        background: background,
      },
      forecastDataPoints: {
        count: 7,
      },
      colors: ["#999BF5"],
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
          show: showData,
        },
        axisTicks: {
          show: showData,
        },
        axisBorder: {
          show: showData,
        },
      },
      yaxis: {
        labels: {
          show: showData,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: showData,
          },
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        height="100%"
      />
    </div>
  );
};

Line.defaultProps = {
  showData: true,
  background: "white",
};

export default Line;
