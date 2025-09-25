import React, { useState, useEffect } from "react";

const Scrollbar = () => {
  const [progressBar, setProgressBar] = useState(0);

  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setProgressBar(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);

    return () => {
      window.removeEventListener("scroll", scrollHeight);
    };
  }, []);

  return (
    <div
      style={{ width: `${progressBar}%`, maxWidth: "100%" }}
      className="fixed h-[4px] sm:top-0 sm:h-[7px] rounded-[0px_2px_0px_0px] !max-w-[100%] bg-gradient-to-b from-indigo-500  z-20"
    ></div>
  );
};

export default Scrollbar;
