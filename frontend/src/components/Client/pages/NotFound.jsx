import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../molecules/NavigationBar";

const NotFound = ({text = "Not Found" }) => {
  return (
    <>
      <NavigationBar  />
      <div className={`bg-hero-pattern h-screen bg-repeat-round flex flex-col items-center justify-center`}>
        <h1 className={` max-w-7xl sm:p-4 font-extrabold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mb-3 shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center`}>
          {text}
          </h1>
        <div className="flex gap-3 flex-wrap">
        <Link to='/' className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600" >Homepage</Link>
        {/* <Link to='/blogs' className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600">Blogs</Link> */}
        <Link to='/dashboard' className="border border-violet-600 px-6 py-4 rounded-xl hover:bg-violet-600">Dashboard</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
