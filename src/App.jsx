import { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";

import reactLogo from "./assets/react.svg";

// components
import Layout from "./components/core/Layout";
import Temperature from "./components/core/Temperature";
import Time from "./components/core/Time";
import Location from "./components/core/Location";
import Telemetry from "./components/core/Telemetry";
import Timeline from "./components/core/Timeline";
import CurrentStats from "./components/core/CurrentStats";
import CurrentForecast from "./components/core/CurrentForecast";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
  },
};

const chart = {
  series: [
    {
      name: "Forecast Chart",
      data: [
        { x: "Morning", y: 7 },
        { x: "Afternoon", y: 15 },
        { x: "Evening", y: 22 },
        { x: "Night", y: 12 },
      ],
    },
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    labels: ["Morning", "Afternoon", "Evening", "Night"],
    xaxis: {
      show: false,
      type: "category",
      floating: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      padding: {
        left: 25,
        right: 25,
      },
    },
    legend: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  },
};

function App() {
  const [wheater, setWheater] = useState(null);

  useEffect(() => {
    const getWheatherInfo = async () => {
      const response = await fetch(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=buenos%20aires&days=3&lang=es",
        options
      );
      const data = await response.json();
      console.log(data);
      setWheater(data);
    };
    getWheatherInfo();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <CurrentStats>
          <div className="col-start-1 col-span-1">
            <Location location={wheater?.location.name} />
          </div>
          <div className="col-start-3 col-span-1">
            <Time localtime={wheater?.forecast.forecastday[0].date} />
          </div>
          <div className="col-start-1 col-span-3 row-start-2 row-span-2">
            <Temperature temperature={wheater?.current.temp_c} />
          </div>
          <div className="col-start-2 col-span-1">
            <p className="text-xl text-white">
              {wheater?.current.condition.text}
            </p>
          </div>
          <div className="col-start-1 col-span-3">
            <Telemetry />
          </div>
          <CurrentForecast>
            <ReactApexChart
              options={chart.options}
              series={chart.series}
              type="area"
              height={180}
            />
          </CurrentForecast>
        </CurrentStats>
        <Timeline hours={wheater?.forecast.forecastday[0].hour} />
      </div>
    </>
  );
}

export default App;
