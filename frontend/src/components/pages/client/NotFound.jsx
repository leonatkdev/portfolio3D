import React from "react";
import NavigationBar from "../../molecules/client-sections/NavigationBar";

const NotFound = ({text = "Not Found" }) => {
  return (
    <>
      <NavigationBar  />
      <div className={`bg-hero-pattern h-screen bg-repeat-round flex flex-col items-center justify-center`}>
        <h1 className={` font-extrabold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mb-3 shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center`}>
          {text}
          </h1>
        <div className="flex gap-3 flex-wrap">
        <button className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600" >Homepage</button>
        <button className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600">Projects</button>
        <button className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600">Blogs</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
