import React, { useState } from "react";
import { avatar } from "../../../assets/index";
import { HomeSvg, SettingsSvg } from "../../../assets/svg/index";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Dashboard = (props) => {
  const dummyData = [
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
    {
      label: "Revenue",
      number: "$4,200.69",
    },
  ];

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [350, 450, 600, 400, 700],
      },
      {
        label: "Expenses",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [200, 300, 400, 500, 600],
      },
    ],
  };

  const recentEmailData = [
    {
      img: avatar,
      name: "Lana Del Ray",
      message: "Hello",
      time: "1:24",
      status: "Not Responded",
    },
    {
      img: avatar,
      name: "Lana Del Ray",
      message: "Hello",
      time: "1:24",
      status: "Not Responded",
    },
    {
      img: avatar,
      name: "Lana Del Ray",
      message: "Hello",
      time: "1:24",
      status: "Not Responded",
    },
    {
      img: avatar,
      name: "Lana Del Ray",
      message: "Hello",
      time: "1:24",
      status: "Not Responded",
    },
  ];

  const todoList = [
    {
      icons: <HomeSvg />,
      task: "Finish the project",
      time: "Nov 5 at 7:00 pm ",
    },
    {
      icons: <HomeSvg />,
      task: "Finish the project",
      time: "Nov 5 at 7:00 pm ",
    },
    {
      icons: <HomeSvg />,
      task: "Finish the project",
      time: "Nov 5 at 7:00 pm ",
    },
    {
      icons: <HomeSvg />,
      task: "Finish the project",
      time: "Nov 5 at 7:00 pm ",
    },
  ];

  return (
        <div className=" bg-white w-full text-black p-4">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              {dummyData?.map((data) => (
                <div className="p-6 bg-[#131826] text-white rounded-2xl min-w-[200px]">
                  <SettingsSvg style="w-9 h-9" />
                  <span className="block pt-4 text-2xl font-bold">
                    {data?.number}
                  </span>
                  <span className="block text-[14px] pt-1">{data?.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-rows-[140px_auto] grid-cols-[270px_auto]">
              <div className="p-5 bg-[#DEECF2] rounded-xl w-[270px]">
                <p className=" text-xl font-medium mb-2">New Clients</p>
                <span className=" text-6xl font-bold">69</span>
                <span className=" text-xs text-[#5C9A5A] bg-[#B8D7CB] ml-3 p-2 rounded-lg">
                  +18.7%
                </span>
              </div>
              <div className="p-5 bg-[#DEECF2] rounded-xl w-[270px] mt-3">
                <p className=" text-xl font-medium mb-2">Messages</p>
                <span className=" text-6xl font-bold">7</span>
                <span className=" text-xs text-[#BB4B51] bg-[#D7BFCD] ml-3 p-2 rounded-lg">
                  +18.7%
                </span>
              </div>

              <div className="row-start-1 row-end-3 col-start-2">
                <Chart type="line" data={chartData} />
              </div>
            </div>

            <div className="p-7 bg-[#DEECF2] rounded-xl w-[500px]">
              <span>Recent Emails</span>
              {recentEmailData?.map((elm) => (
                <div className="flex justify-between">
                  <img src={elm?.img} width={35} height={35} />
                  <span>{elm?.name}</span>
                  <span>{elm?.message}</span>
                  <span>{elm?.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#131826] p-7 text-white rounded-3xl">
              <p className=" text-xl font-semibold mb-2">Agile Tickets</p>
              <span className=" block text-sm mb-2">In Progress</span>
              <span className="block w-full h-1 bg-white"></span>
              <p className=" text-sm font-semibold text-center mt-2">
                Estimated Processing
              </p>
              <span className="block text-sm text-center">
                4-5 bussiness days
              </span>
              <button className="bg-white text-black rounded-lg p-2 text-center text-sm font-semibold w-full mt-4">
                View Status
              </button>
            </div>

            <div>
              <span className="block text-xl font-semibold my-4 ">
                Your ToDo List
              </span>
              <ul>
                {todoList?.map((task) => (
                  <li className="flex mt-1">
                    <span className="flex items-center justify-center bg-[#151515] text-white p-2 rounded-[19px] w-12 h-12 mr-3">
                      {task.icons}
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-[#151515]">
                        {task.task}
                      </span>
                      <span className=" block text-xs text-[#6F7679]">
                        {task.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#131826] p-7 text-white rounded-3xl mt-4">
              <p className=" text-xs text-[#6F7679] mb-1 ">Now</p>
              <p className=" font-semibold">Meeting with Team</p>
              <p className="text-[14px] text-[#6F7679]">
                November 7 at 6:00 PM
              </p>
              <p className=" mt-2 text-sm ">
                Topics: -Performnace -Team -Revenue
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
