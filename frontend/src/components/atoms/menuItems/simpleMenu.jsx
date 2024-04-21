import React from "react";
import { HomeSvg, ArrowSvg, SearchSvg } from "../../../assets/svg/index";
import { AiOutlineStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const SimpleMenu = ({ item ,  addFavorite}) => {
  console.log('item', item)
  return (
    <li className="flex flex-wrap gap-3 items-center p-3 rounded-md hover:bg-[#2B313B]">
      <Link to={item?.path} className="flex flex-wrap gap-3">
        <HomeSvg />
      <span>{item?.label}</span>
      </Link>
      
      <AiOutlineStar
        className="w-[22px] h-[22px] ml-auto"
        onClick={() => addFavorite(item)}
      />
    </li>
  );
};

export default SimpleMenu;
