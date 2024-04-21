import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { HomeSvg, ArrowSvg, SearchSvg } from "../../../assets/svg/index";
import SimpleMenu from "../../atoms/menuItems/simpleMenu";
import ExtendedMenu from "../../atoms/menuItems/extendedMenu";

const DetailsMenu = ({ showDashboard, activeTab, favorite, addFavorite }) => {
  const detailDashboardData = {
    Home: [
      { label: "Home", path: "/dashboard" },
      { label: "Test", path: "/dashboard" },
      { label: "Translations", path: "/dashboard" },
      {
        label: "Test1",
        path: "/dashboard",
        moreLinks: [
          { label: "Test2", path: "/dashboard" },
          { label: "Test3", path: "/dashboard" },
        ],
      },
      {
        label: "Test4",
        path: "/dashboard",
        moreLinks: [
          { label: "Test5", path: "/dashboard" },
          { label: "Test6", path: "/dashboard" },
        ],
      },
    ],
    Favorite: favorite,
    Posts: [{ label: "Pages", path: "/dashboard/pages" }],
    Sections: [{ label: "Sections", path: "/dashboard/sections" }],
  };

  return (
    showDashboard && (
      <div className="border-s border-[#262F3A] w-[315px] max-w-[315px] min-w-[315px] flex flex-col p-6 gap-4  bg-[#121827]">
        <span className="text-[24px] font-bold">Dashboard</span>

        <form className="flex items-center relative w-full">
          <button className="absolute left-3">
            <SearchSvg />
          </button>
          <input
            placeholder="Search"
            className="bg-[#2B303D] border border-[#2B303D] rounded-md p-2 pl-12 w-full"
          ></input>
        </form>
        <ul>
        
          {detailDashboardData[activeTab]?.map((menuItem) => {
            const hasMoreLinks = menuItem?.moreLinks !== undefined;

            return !hasMoreLinks ? (
              <SimpleMenu
                item={menuItem}
                key={menuItem?.label}
                addFavorite={addFavorite}
              />
            ) : (
              <ExtendedMenu menuItem={menuItem} addFavorite={addFavorite} />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default DetailsMenu;
