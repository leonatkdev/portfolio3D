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
    },
    {
      label: "Employee",
      number: "35",
    },
    {
      label: "Remote",
      number: "7",
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
        label: "Sales",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [350, 450, 240, 400, 450, 100, 300],
        borderRadius: 100,
        borderSkipped: false,
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

  return (
    <div className=" text-black p-4">
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Analyzing the patterns and trends of marketing traffic</p>
        </div>
        <div className="flex items-center gap-4">
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

      <div className="grid grid-cols-[1fr_0.7fr] gap-4">
        <div className="bg-white rounded-2xl p-4 max-w-[650px]">
          <Chart type="bar" data={chartData} options={config} />
        </div>
        <div className=" grid grid-cols-2 gap-1 h-fit">
          {dummyData?.map((data) => (
            <div className=" relative p-6 bg-[#131826] text-white rounded-2xl min-w-[200px]">
              {/* <SettingsSvg style="w-9 h-9 absolute right-4" /> */}
              <span className="block text-[14px] pt-1">{data?.label}</span>
              <span className="block pt-4 text-4xl font-bold">
                {data?.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
