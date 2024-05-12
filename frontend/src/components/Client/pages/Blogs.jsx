import React, { useState } from "react";
import NavigationBar from "../molecules/NavigationBar";
import blogImg from "../../../assets/blog.jpg";
import { SearchSvg } from "../../../assets/svg/index";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const dummyData = [
  {
    postName: "This is a blog post about a random issue",
    readingTime: "4 min read",
    link: "/blog/1",
    blogImg: blogImg,
    category: "Tech",
    mainChategory: "Technology 1",
    publishDate: "12 November 2023",
    desc: `  Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of
    Lorem Ipsum`,
  },
  {
    postName: "This is a blog post about a random issue",
    readingTime: "4 min read",
    link: "/blog/1",
    blogImg: blogImg,
    category: "Tech",
    mainChategory: "Technology 2",
    publishDate: "12 November 2023",
    desc: `  Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was
    popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of
    Lorem Ipsum`,
  },
  {
    postName: "This is a blog post about a random issue",
    readingTime: "4 min read",
    link: "/blog/1",
    blogImg: blogImg,
    category: "Tech",
    mainChategory: "Technology 3",
    publishDate: "12 November 2023",
    desc: `  Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum`,
  },
];

const dummyTags = [
  "All",
  "Technology",
  "Digital Marketing",
  "Social Media",

];

const Blogs = () => {
  const [active, setActive] = useState(0);

  const [activeTab, setActiveTab] = useState("All");

  const currentData = dummyData[active];

  const dymmyDataLength = dummyData.length;

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="bg-hero-pattern bg-cover bg-fixed w-screen h-screen ">
      <NavigationBar />
      <div className="mt-[64px] sm:mt-[115px]  max-w-7xl mx-auto px-6 sm:py-16 py-2 ">
        <div className="flex gap-8 flex-col sm:flex-row sm:min-h-[64vh]">
          {currentData && (
            <div className=" sm:w-[65%] relative">
              <span className="my-4 block text-[#dfd9ff] font-bold">
                {currentData?.mainChategory}
              </span>
              <h1
                className={`relative z-10 font-black text-[20px]  lg:text-[40px]  bg-gradient-to-r from-[#915eff] via-white to-indigo-400 inline-block text-transparent bg-clip-text`}
              >
                {currentData?.postName}
              </h1>
              <p
                className={`relative max-h-[190px] overflow-hidden mr-[53%] z-10 text-[12] lg:text-base mt-4 text-white-100  `}
              >
                {currentData?.desc}
              </p>
              <div className=" relative mr-[55%] z-10 flex flex-col gap-1 sm:flex-row justify-between mt-6 font-semibold">
                <p className="flex items-center text-[#dfd9ff] ">
                  <IoTimeOutline className="mr-1" width={16} height={16} />{" "}
                  {currentData?.readingTime}
                </p>
                <p className="flex items-center">
                  <FaRegCalendarAlt className="mr-2" width={16} height={16} />{" "}
                  {currentData?.publishDate}
                </p>
              </div>
              <a
                href={currentData?.link}
                className="group flex relative z-10 w-[62%] items-center  mt-4 p-3 border-b font-semibold border-[#915eff] hover:bg-[#915eff] hover:text-white  text-[#915eff] text-center arrow hover:after:border-[#915eff] hover:before:left-[93%]"
              >
                Read more
                <IoIosArrowDown
                  width={24}
                  height={24}
                  className="w-6 h-6 -rotate-90  "
                />
              </a>
              <div className="flex absolute bottom-0 right-0 z-10 bg-gradient-to-b from-[#915eff] to-[#202020]">
                <span className={`flex p-3 px-4  ${
                      active === 0 && "bg-[#202020] opacity-45"
                    }`}>
                  <IoIosArrowDown
                    width={24}
                    height={24}
                    onClick={() => active !== 0 && handleClick(active - 1)}
                    className={`w-6 h-6 rotate-90 sm:w-8 sm:h-8 ${
                      active === 0 && "opacity-50 bg-[#202020]"
                    }`}
                  />
                </span>
                <span className={`flex p-3 px-4 rounded-br-lg ${
                      dymmyDataLength - 1 === active && " bg-[#202020] opacity-45 "
                    }`}>
                  <IoIosArrowDown
                    width={24}
                    height={24}
                    onClick={() =>
                      dymmyDataLength - 1 !== active && handleClick(active + 1)
                    }
                    className={`w-6 h-6 -rotate-90 sm:w-8 sm:h-8 ${
                      dymmyDataLength - 1 === active && "opacity-50 bg-[#202020]"
                    }`}
                  />
                </span>
              </div>

              <img
                src={blogImg}
                alt="blog"
                width={450}
                height={450}
                className=" h-full object-cover w-1/2 absolute top-[-52px] right-0"
              />
            </div>
          )}
          <div className=" sm:w-[40%]  px-4 py-6 rounded-tr-[32px] rounded-bl-[32px] " 
          style={{ background: "repeating-linear-gradient(145deg, #915eff, transparent 250px)"}}>
            <span className=" block text-2xl mb-6 font-medium pl-3 pt-3">
              Latest Posts
            </span>
            {dummyData.map((data, index) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className={`flex bg-[#202020]  p-2 px-3 rounded-[10px] mb-2 ${
                  active === index && "bg-[#343434]"
                }`}
                onClick={() => handleClick(index)}
              >
                <img
                  src={blogImg}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] rounded-2xl"
                />
                <div className="p-3 pb-0 flex flex-col gap-4">
                  <h1> {data.postName}</h1>
                  <p className="flex items-center text-sm">
                    <IoTimeOutline className="mr-1" width={16} height={16} />
                    {data.readingTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-16">
          <div className="grid  sm:flex gap-4 justify-between items-center">
            <h3 className=" text-2xl font-medium">Latest Articles</h3>
            <div className=" flex gap-4 overflow-auto">
              {dummyTags?.map((tag) => (
                // eslint-disable-next-line react/jsx-key
                <span className={`p-3 rounded-full bg-[#353B40] border border-[#69707d] hover:bg-[#915eff] hover:text-white text-center min-w-20 whitespace-nowrap ${activeTab === tag && "bg-[#915eff] text-white"}`}
                onClick={() => setActiveTab(tag)}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative ">
              <input
                placeholder="Search"
                className="border-b border-b-[#915eff] px-4 py-3 text-white bg-transparent"
              ></input>
              <SearchSvg style=" absolute top-3 right-4" />
            </div>
          </div>

          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-4">
            {dummyData?.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div className=" relative rounded-2xl bg-[#202020]">
                <span className="block relative p-[2px] borderGradient">
                  <img
                    src={item?.blogImg}
                    className=" relative bg-[#202020] h-[200px] w-full object-cover rounded-2xl borderGradient"
                    height={200}
                  />
                </span>

                <span className=" absolute top-[150px] right-4 text-sm  py-[6px] px-2 bg-[#e9e5f9] text-[#915eff]  rounded-md">
                  {item?.category}
                </span>
                <h2 className=" pt-4  text-xl px-4 pb-2 font-medium relative ">
                  {item?.postName}
                </h2>
                <p className=" text-sm px-4 overflow-hidden h-24">
                  {item?.desc}
                </p>
                <div className="flex mt-4 px-4 gap-3 pb-4 ">
                  <span className="flex items-center mt text-sm font-medium">
                    <IoTimeOutline className="mr-1" width={16} height={16} />
                    {item?.readingTime}
                  </span>
                  <p className="flex items-center text-sm font-medium">
                    <FaRegCalendarAlt className="mr-2" width={16} height={16} />
                    {item?.publishDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
