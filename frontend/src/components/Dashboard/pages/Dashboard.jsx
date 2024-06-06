import React, { useState } from "react";
import { avatar } from "../../../assets/index";
import { BsCalendarWeek } from "react-icons/bs";
import { HomeSvg, SettingsSvg } from "../../../assets/svg/index";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoFilter } from "react-icons/io5";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Dashboard = (props) => {
  const dummyData = [
    {
      label: "Revenue",
      number: "$4,200.69",
      chartData: {
        status: "up",
        statusData: "-20%",
      },
    },
    {
      label: "Blogs",
      number: "7",
      chartData: {
        status: "down",
        statusData: "-20%",
      },
    },
    {
      label: "Employee",
      number: "35",
      chartData: {
        status: "down",
        statusData: "-20%",
      },
    },
    {
      label: "Remote",
      number: "7",
      chartData: {
        status: "up",
        statusData: "-20%",
      },
    },
  ];

  const chartData = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Top Sales",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        hoverBackgroundColor:"rgba(59, 130, 246, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [350, 450, 240, 400, 450, 100, 300],
        borderRadius: 100,
        borderSkipped: false,
        barThickness: 25, // Fixed bar width
        maxBarThickness: 40 // Maximum width for automatically-sized bars
      },
    ],
  };

  const chartDataTwo = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    datasets: [
      {
        label: "Top Sales",
        // backgroundColor: "rgba(239, 6, 6, 1)",
        borderColor:  function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return; // Skip if chart area is not available
          let gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'blue');
          gradient.addColorStop(0.5, 'red');
          gradient.addColorStop(1, 'red');
          return gradient;
        },
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          if (!chartArea) return; // Skip if chart area is not available
          let gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(239, 6, 6, 0.5)');
          return gradient;
        },
        borderWidth: 1.5,
        data: [350, 450, 240, 400, 450, 100, 300],
       
      },
    ],
  };


  const config = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: false,
          lineWidth: 5,
        },
        x: {
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
            display: false,
            lineWidth: 5,
          },
        },
      },
    },
  };

  const SocialData = {
    Facebook: 100,
    Instagram: 200,
    Twitter: 300,
    Tiktok: 400,
  };

  return (
    <div className=" text-black p-4">
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Analyzing the patterns and trends of marketing traffic</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex bg-white px-3 py-2 items-center gap-2 rounded-lg border border-slate-300">
            <IoFilter />
            Filter
          </div>
          <div className="flex bg-white px-3 py-2 items-center gap-2 rounded-lg border border-slate-300">
            <BsCalendarWeek />
            Nov 2002 - Nov 2021
          </div>
          <div className="flex bg- px-3 py-2 items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
            <PiMicrosoftExcelLogoFill /> Export Report
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-4">
        <div className="bg-white rounded-2xl p-4">
          <Chart type="bar" data={chartData} options={config} />
        </div>
        <div className=" grid grid-cols-2 gap-1 h-fit rounded-2xl ">
          {dummyData?.map((data, index) => (
            <div
              className={` relative p-6 bg-white text-black ${
                index === 0 && " rounded-tl-2xl"
              } ${index === 1 && " rounded-tr-2xl"} ${
                index === 2 && " rounded-bl-2xl"
              } ${index === 3 && " rounded-br-2xl"}`}
            >
              <span className="block text-[14px]">{data?.label}</span>
              <span className="block pt-2  pb-4 text-4xl font-bold">
                {data?.number}
              </span>
              <p>
                {data?.chartData?.status ? (
                  <span
                    className={`${
                      data?.chartData?.status === "up"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data?.chartData?.statusData}{" "}
                    <span className=" text-black">vs last month</span>
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-4 pt-4">
        <div>
          <Chart type="line" data={chartDataTwo} options={{

          }} />
        </div>

        <div className="bg-white rounded-2xl w-fit">
          {Object.entries(SocialData).map(([key, value]) => {
            return (
              <div className="p-4 border-b ">
                <span className=" text-lg font-medium">{key}</span>
                <p className=" text-3xl font-semibold pt-1">
                  {value} <span className=" text-base font-normal ">Visitors</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
