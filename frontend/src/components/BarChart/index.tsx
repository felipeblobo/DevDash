import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: { categories: [] },
    series: [{ name: "", data: [] }],
  });

  useEffect(() => {
    (async function graphGenerator() {
      const response = await axios.get(BASE_URL + "/sales/success-by-seller");
      const data = response.data as SaleSuccess[];
      const labels = data.map((item) => item.sellerName);
      const series = data.map((item) =>
        round((item.deals / item.visited) * 100, 1)
      );

      setChartData({
        labels: {
          categories: labels,
        },
        series: [{ name: "% Success", data: series }],
      });
    })();
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
