import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeSvg, ArrowSvg, SearchSvg } from "../../../../assets/svg/index";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const ExtendedMenu = ({ menuItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div
        className="flex flex-wrap gap-3 items-center p-3 rounded-md hover:bg-[#2B313B]"
        onClick={() => setOpen(!open)}
      >
        <HomeSvg />
        <span>{menuItem?.label}</span>
        <IoIosArrowDown className="w-5 h-5" />
      </div>

      {open && (
        <ul className="w-full border-s border-[#313745] ml-3">
          {menuItem?.moreLinks.map((morelink) => (
            <li
              key={morelink.label}
              className="flex items-center hover:bg-[#2B313B]"
            >
              <Link
                to={morelink.path}
                className="flex items-center gap-3 rounded-md p-3 w-full hover:bg-[#2B313B]"
              >
                <HomeSvg />
                <span>{morelink.label}</span>
                <AiOutlineStar
                  className="w-[22px] h-[22px] ml-auto"
                  onClick={() => addFavorite(morelink)}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExtendedMenu;
