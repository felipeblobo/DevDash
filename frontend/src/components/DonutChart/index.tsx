import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData> ({ labels: [], series: []});

  useEffect(() => {
    (async function graphGenerator() {
      const response = await axios.get(BASE_URL + "/sales/sum-by-seller");
      const data = response.data as SaleSum[];
      const labels = data.map((item) => item.sellerName);
      const series = data.map((item) => item.sum);
  
      setChartData({ labels: labels, series: series });
      
    })()

  }, [])

 


  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
