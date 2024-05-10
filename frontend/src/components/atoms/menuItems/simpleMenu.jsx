import React from "react";
import { HomeSvg, ArrowSvg, SearchSvg } from "../../../assets/svg/index";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const SimpleMenu = ({
  item,
  addFavorite,
  existingFavorite = false,
  removeItem,
}) => {
  return (
    <li className="flex gap-3 items-center p-3 rounded-md hover:bg-[#2B313B]">
      <Link to={item?.path} className="flex w-full  gap-3">
        {item.icon ? item.icon : <HomeSvg />}
        <span>{item?.label}</span>
      </Link>

      {existingFavorite ? (
        <AiFillStar
          className="w-[22px] h-[22px] "
          onClick={() => removeItem(item)}
        />
      ) : (
        <AiOutlineStar
          className="w-[22px] h-[22px] "
          onClick={() => addFavorite(item)}
        />
      )}
    </li>
  );
};

export default SimpleMenu;
