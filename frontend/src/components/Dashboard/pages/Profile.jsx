import React from "react";
import { avatar } from "../../../assets";
import { BiMessageSquareDetail } from "react-icons/bi";
import CoolBg from "../../../assets/cololbg.jpg";
import DashboardLayout from "../templates/DashboardLayout";

const dummyTeamMembers = [
  {
    path: "/",
    name: "Elon Musk",
    img: avatar,
    note: "Team Lead",
  },
  {
    path: "/",
    name: "Elon Musk",
    img: avatar,
    note: "Team Lead",
  },
  {
    path: "/",
    name: "Elon Musk",
    img: avatar,
    note: "Team Lead",
  },
  {
    path: "/",
    name: "Elon Musk",
    img: avatar,
    note: "Team Lead",
  },
];

const Profile = () => {
  return (
    <DashboardLayout>
      <div className=" p-4 flex flex-col justify-center md:flex-row gap-6 bg-[#EFF3F6]">
        <div className="bg-[#fefefe] rounded-3xl">
          <img
            className="w-[700px] h-[300px] object-cover rounded-t-3xl"
            src={CoolBg}
            width={700}
            height={500}
            alt="Cool Background"
          />
          <img
            className="rounded-full w-[120px] h-[120px] border-2 border-white relative mt-[-3rem] ml-[2rem]"
            src={avatar}
            width={120}
            height={120}
            alt="Profile img"
          />
          <div className="p-4 flex justify-between">
            <div>
              <p className="font-bold text-2xl text-[#1C1E1F]">Leo</p>
              <p className=" text-[#424444] text-sm mt-1">
                Tech lead at #Dev Team
              </p>
              <p className=" text-xs mt-1 mb-2">🇫🇷 Annecy, France</p>

              <button className="bg-[#131826] text-white rounded-xl mt-2 py-2 px-4 ">
                Message
              </button>

              <button className="border  rounded-xl mt-2 ml-2 py-2 px-4 ">
                ...More
              </button>
            </div>

            <div>
              Status:
              <p>Position: #Tech Lead</p>
              <p>Team: Hunters</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fefefe] rounded-3xl py-4  px-6">
          <p className=" text-lg font-semibold mb-4">Team on people</p>

          {dummyTeamMembers?.map((person) => (
            <div className="flex gap-3 mt-2 items-center ">
              <img
                src={person?.img}
                alt=""
                width={30}
                height={30}
                className=" w-10 h-10 rounded-full"
              />
              <div className=" min-w-[170px]">
                <p className=" font-semibold">{person.name}</p>
                <p className=" text-sm text-[#424444]">{person.note}</p>
              </div>
                <BiMessageSquareDetail className=" w-[30px] h-8 text-[#131826] ml-2" />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
