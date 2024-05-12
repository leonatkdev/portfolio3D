import React from "react";
import NavigationBar from "../molecules/NavigationBar";
import { styles } from "../../../style";
import blogImg from "../../../assets/blog.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Blogs = () => {
  const dummyTags = ["Tech", "Design", "Development", "React"];
  return (
    <div className="bg-hero-pattern bg-cover bg-fixed w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-col sm:flex-row  mx-4  gap-8 items-center mt-[64px] sm:mt-[115px]  max-w-7xl sm:mx-auto  p-[32px]  backdrop-blur-md border rounded-[32px] border-[#915eff] ">
        <div className="sm:w-1/2">
          <span className=" block font-semibold mb-9">Blog</span>
          <h1 className="mb-8 text-white text-4xl font-bold">
            This is a blog post about a random issue
          </h1>
          <div className="mb-6 flex flex-wrap gap-2">
            {dummyTags.map((tag) => (
              <span className="text-white-100 bg-[#915eff] px-3 py-2  rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white-100 mt-2 mb-6 text-sm ">
            Leonat Krasniqi
            <span className="text-[#88888f] ml-1">
              | November 7, 2023 | Reading time 5 min
            </span>
          </p>
          <span className="text-white-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
          <p className="flex justify-center gap-1 items-center  mt-4 p-3 font-semibold text-[#915eff] text-center  ">
            Read more{" "}
            <IoIosArrowDown className="w-6 h-6" width={24} height={24} />
          </p>
        </div>
        <div className=" relative sm:w-1/2 p-[2px] borderGradient2 ">
          <img
            src={blogImg}
            className="relative  h-auto max-h-[400px] w-full object-cover rounded-2xl "
          />
        </div>
      </div>
      <div className=" max-w-[80rem] sm:px-16 sm:pt-3 pb-40 text-center  mx-[auto]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

export default Blogs;
