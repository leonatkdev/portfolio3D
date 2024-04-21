import React from "react";
import NavigationBar from "../../molecules/client-sections/NavigationBar";
import {styles} from '../../../style';

const Blogs = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-fixed">
      <NavigationBar />
      <div className=" mt-[8rem] mx-[auto] max-w-[80rem] sm:px-16 sm:pt-12 pb-6 "> 
        <h1 className={`${styles.heroHeadText} text-white`}>
          {`This is a blog post `}
          <span className="text-[#915eff]">about a random issue </span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100  `}>
          I develop 3D visuals , user <br className="sm:block hidden" />
          interfaces and web applications
        </p>
       </div>
       <div className=" flex justify-between max-w-[80rem] sm:px-16 sm:pt-12  mx-[auto]">
        <span>Written by Leonat K. | Reading time 5 min</span>
        <p>
          November 7, 2023
        </p>
       </div>
       <div className=" max-w-[80rem] sm:px-16 sm:pt-12 pb-6 text-center  mx-[auto]">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </div>
       <div className=" max-w-[80rem] sm:px-16 sm:pt-4 pb-6 text-center  mx-[auto]">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </div>
       <div className=" max-w-[80rem] sm:px-16 sm:pt-3 pb-40 text-center  mx-[auto]">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </div>


    </div>
  );
}

export default Blogs;
